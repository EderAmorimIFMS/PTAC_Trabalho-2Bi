'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDashboard = new URL('/pages/dashboard', request.url);
    const urlAlterar = new URL('/pages/alterar', request.url);
    const urlRegistrar = new URL('/pages/registrar', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    } 
   
   //questão... 
    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/alterar' || request.nextUrl.pathname === '/pages/registrar' ) {
            return NextResponse.redirect(urlLogin);
        }
    } 

    if (isTokenValidated) {
        if (request.nextUrl.pathname === '/') {
            return NextResponse.redirect(urlDashboard);    
        }
    }
    
    


    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard']
};

