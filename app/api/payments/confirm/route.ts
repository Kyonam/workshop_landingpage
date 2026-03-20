import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { paymentKey, orderId, amount } = await request.json();
  const secretKey = process.env.TOSS_SECRET_KEY;

  if (!secretKey) {
    return NextResponse.json({ message: "Secret key is missing" }, { status: 500 });
  }

  const basicToken = Buffer.from(`${secretKey}:`).toString("base64");

  try {
    const response = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        paymentKey,
        orderId,
        amount,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error("Payment confirmation failed:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
