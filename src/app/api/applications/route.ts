import { db } from "@/lib/drizzle/db";
import { NextResponse } from "next/server";

// type ResponseData = {
// 	data: Application[] | null;
// 	error: unknown | null;
// };

export async function GET(req: Request) {
	try {
		const result = await db.query.applications.findMany();
		return NextResponse.json({ data: result, error: null });
	} catch (error: unknown) {
		return NextResponse.json({ error, data: null });
	}
}
