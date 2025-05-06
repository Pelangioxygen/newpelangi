'use client'
import React from "react";

const SubmitButtonIcon = () => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.2546 7C9.84038 7 9.5046 7.33579 9.5046 7.75C9.5046 8.16421 9.84038 8.5 10.2546 8.5H14.9237L7.72393 15.6998C7.42536 15.9983 7.42536 16.4824 7.72393 16.781C8.02251 17.0796 8.50659 17.0796 8.80517 16.781L16.0046 9.58158V14.25C16.0046 14.6642 16.3404 15 16.7546 15C17.1688 15 17.5046 14.6642 17.5046 14.25V7.75C17.5046 7.33579 17.1688 7 16.7546 7L10.2546 7Z"
            fill="#576DC7"/>
    </svg>);

export default function Form() {
    const [state, setState] = React.useState(false);
    if(state) return <h3 className={'text-5xl my-12'}>Thank you for submission</h3>
    return <form name="submit-to-google-sheet"
                 // method="POST"
                 // action="https://script.google.com/macros/s/AKfycbz1JCWJ0EOnphar8i56XvMZX8H7F3mQzBkamuTLF3h8lGFVIY6Va_YEE-Bg8zm0K181dA/exec"
                 className={"sm:mt-20 mt-10  text-center"}
              onSubmit={(e) => {
            console.log(e);
            e.preventDefault()
            // @ts-ignore
                  fetch('https://script.google.com/macros/s/AKfycbz1JCWJ0EOnphar8i56XvMZX8H7F3mQzBkamuTLF3h8lGFVIY6Va_YEE-Bg8zm0K181dA/exec', { method: 'POST', body: new FormData(e.target)})
                .then(response => {
                    console.log('Success!', response)
                    setState(true);
                })
                .catch(error => console.error('Error!', error.message))
        }}
    >
        <span
            className={"uppercase font-[family-name:var(--font-pelangi-medium)] sm:text-sm text-xs pb-3 inline-block"}>Sign up to be the first to know when we launch</span>
        <div className={"rounded-lg border-[#FFFFFF80] border p-0.5 flex items-center"}>
            <input name={"Email"} type={"email"} placeholder={"Enter mail"}
                   className={"mx-5 outline-none placeholder:text-white"}/>
            <button
                className={"inline-flex m-w-[8rem] gap-1 break-keep items-center sm:py-2 sm:px-6 py-2 px-3 rounded-lg text-[#576DC7] bg-white min-w-32"}
                type={"submit"}>Notify me <SubmitButtonIcon/></button>
        </div>
    </form>;
}