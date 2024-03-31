import { NextRequest , NextResponse } from "next/server";

export function GET ( req : NextRequest ,{params} : {params : {str : string}}) {

    return NextResponse.json({ 
        Message : "Hello, World!",
        Params: params.str
    });
}

export function POST ( req : NextRequest ,{params} : {params : {str : string}}) {

    return NextResponse.json({ 
        Message : "Hello, World!",
        Params: params.str
    });
}   