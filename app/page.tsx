"use client";
import Image from "next/image";
import { useState } from "react";
import bg from "./bg-sign-in-basic.jpeg";
export default function Home() {
  const [bgslide, setbgslide] = useState(true);
  return (
    <main className="w-screen min-h-screen grid bg-black place-content-center">
      <div className="main"></div>
      <div className="relative flex w-fit h-fit rounded-lg bg-slate-700 shadow-lg shadow-blue-500/50">
        <div className={bgslide ? "slide add" : "slide"}>
          <div className="flex flex-col w-full h-full place-content-center border-opacity-50 relative">
            <h1 className="absolute font-semibold text-4xl left-1/2 -translate-x-2/4 top-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Register
            </h1>
            <div className="flex gap-4 justify-center mb-5">
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                  className="h-6 w-6"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDYuMDE2IDQuNDMyLDEwLjk4NCAxMC4yMDYsMTEuODUydi04LjY3MmgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLC0zLjQ3NSAxLjY5MywtNSA0LjU4MSwtNWMxLjM4MywwIDIuMTE1LDAuMTAzIDIuNDYxLDAuMTQ5djIuNzUzaC0xLjk3Yy0xLjIyNiwwIC0xLjY1NCwxLjE2MyAtMS42NTQsMi40NzN2MS43MjRoMy41OTNsLTAuNDg3LDMuMTU0aC0zLjEwNnY4LjY5N2M1Ljg1NywtMC43OTQgMTAuMzc2LC01LjgwMiAxMC4zNzYsLTExLjg3N2MwLC02LjYyNyAtNS4zNzMsLTEyIC0xMiwtMTJ6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
                />
              </button>
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                  className="h-6 w-6"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LjAwMzkxLDNjLTYuNjI5LDAgLTEyLjAwMzkxLDUuMzczIC0xMi4wMDM5MSwxMmMwLDYuNjI3IDUuMzc0OTEsMTIgMTIuMDAzOTEsMTJjMTAuMDEsMCAxMi4yNjUxNywtOS4yOTMgMTEuMzI2MTcsLTE0aC0xLjMzMDA4aC0yLjI2NzU4aC03LjczMjQydjRoNy43MzgyOGMtMC44ODk1OCwzLjQ0ODI1IC00LjAxMjMzLDYgLTcuNzM4MjgsNmMtNC40MTgsMCAtOCwtMy41ODIgLTgsLThjMCwtNC40MTggMy41ODIsLTggOCwtOGMyLjAwOSwwIDMuODM5MTQsMC43NDU3NSA1LjI0NDE0LDEuOTY4NzVsMi44NDE4LC0yLjgzOTg0Yy0yLjEzNCwtMS45NDQgLTQuOTY5MDMsLTMuMTI4OTEgLTguMDgyMDMsLTMuMTI4OTF6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
                />
              </button>
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                  className="h-6 w-6"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDUuNjIzIDMuODcyLDEwLjMyOCA5LjA5MiwxMS42M2MtMC4wNTYsLTAuMTYyIC0wLjA5MiwtMC4zNSAtMC4wOTIsLTAuNTgzdi0yLjA1MWMtMC40ODcsMCAtMS4zMDMsMCAtMS41MDgsMGMtMC44MjEsMCAtMS41NTEsLTAuMzUzIC0xLjkwNSwtMS4wMDljLTAuMzkzLC0wLjcyOSAtMC40NjEsLTEuODQ0IC0xLjQzNSwtMi41MjZjLTAuMjg5LC0wLjIyNyAtMC4wNjksLTAuNDg2IDAuMjY0LC0wLjQ1MWMwLjYxNSwwLjE3NCAxLjEyNSwwLjU5NiAxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNyAwLjcwMywwLjc2OSAxLjU5NiwwLjc2OWMwLjQzMywwIDEuMDgxLC0wLjAyNSAxLjY5MSwtMC4xMjFjMC4zMjgsLTAuODMzIDAuODk1LC0xLjYgMS41ODgsLTEuOTYyYy0zLjk5NiwtMC40MTEgLTUuOTAzLC0yLjM5OSAtNS45MDMsLTUuMDk4YzAsLTEuMTYyIDAuNDk1LC0yLjI4NiAxLjMzNiwtMy4yMzNjLTAuMjc2LC0wLjk0IC0wLjYyMywtMi44NTcgMC4xMDYsLTMuNTg3YzEuNzk4LDAgMi44ODUsMS4xNjYgMy4xNDYsMS40ODFjMC44OTYsLTAuMzA3IDEuODgsLTAuNDgxIDIuOTE0LC0wLjQ4MWMxLjAzNiwwIDIuMDI0LDAuMTc0IDIuOTIyLDAuNDgzYzAuMjU4LC0wLjMxMyAxLjM0NiwtMS40ODMgMy4xNDgsLTEuNDgzYzAuNzMyLDAuNzMxIDAuMzgxLDIuNjU2IDAuMTAyLDMuNTk0YzAuODM2LDAuOTQ1IDEuMzI4LDIuMDY2IDEuMzI4LDMuMjI2YzAsMi42OTcgLTEuOTA0LDQuNjg0IC01Ljg5NCw1LjA5N2MxLjA5OCwwLjU3MyAxLjg5OSwyLjE4MyAxLjg5OSwzLjM5NnYyLjczNGMwLDAuMTA0IC0wLjAyMywwLjE3OSAtMC4wMzUsMC4yNjhjNC42NzYsLTEuNjM5IDguMDM1LC02LjA3OSA4LjAzNSwtMTEuMzE1YzAsLTYuNjI3IC01LjM3MywtMTIgLTEyLC0xMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                />
              </button>
            </div>
            <div className="divider text-xs">OR</div>
            <div className="grid h-16 card place-items-center">
              <input
                type="text"
                placeholder="Email"
                className="mt-4 input input-bordered input-primary h-11 w-72 max-w-xs"
              />
              <input
                type="text"
                placeholder="Password"
                className="mt-4 input input-bordered input-primary h-11 w-72 max-w-xs"
              />
              <button className="w-24 btn btn-blue-600 mt-4 btn-md h-11 rounded-2xl hover:shadow-blue-500/50 bg-blue-600 border-none hover:shadow-inner hover:bg-blue-500">
                submit
              </button>
            </div>
          </div>
        </div>
        <div className={bgslide ? "slide" : "slide add"}>
          <div className="flex flex-col w-full h-full place-content-center border-opacity-50 relative">
            <h1 className="absolute font-semibold text-4xl left-1/2 -translate-x-2/4 top-14 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Login
            </h1>
            <div className="flex gap-4 justify-center mb-5">
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                    className="h-6 w-6"
                    alt="svgImg"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDYuMDE2IDQuNDMyLDEwLjk4NCAxMC4yMDYsMTEuODUydi04LjY3MmgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLC0zLjQ3NSAxLjY5MywtNSA0LjU4MSwtNWMxLjM4MywwIDIuMTE1LDAuMTAzIDIuNDYxLDAuMTQ5djIuNzUzaC0xLjk3Yy0xLjIyNiwwIC0xLjY1NCwxLjE2MyAtMS42NTQsMi40NzN2MS43MjRoMy41OTNsLTAuNDg3LDMuMTU0aC0zLjEwNnY4LjY5N2M1Ljg1NywtMC43OTQgMTAuMzc2LC01LjgwMiAxMC4zNzYsLTExLjg3N2MwLC02LjYyNyAtNS4zNzMsLTEyIC0xMiwtMTJ6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
                  />
              </button>
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                  className="h-6 w-6"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LjAwMzkxLDNjLTYuNjI5LDAgLTEyLjAwMzkxLDUuMzczIC0xMi4wMDM5MSwxMmMwLDYuNjI3IDUuMzc0OTEsMTIgMTIuMDAzOTEsMTJjMTAuMDEsMCAxMi4yNjUxNywtOS4yOTMgMTEuMzI2MTcsLTE0aC0xLjMzMDA4aC0yLjI2NzU4aC03LjczMjQydjRoNy43MzgyOGMtMC44ODk1OCwzLjQ0ODI1IC00LjAxMjMzLDYgLTcuNzM4MjgsNmMtNC40MTgsMCAtOCwtMy41ODIgLTgsLThjMCwtNC40MTggMy41ODIsLTggOCwtOGMyLjAwOSwwIDMuODM5MTQsMC43NDU3NSA1LjI0NDE0LDEuOTY4NzVsMi44NDE4LC0yLjgzOTg0Yy0yLjEzNCwtMS45NDQgLTQuOTY5MDMsLTMuMTI4OTEgLTguMDgyMDMsLTMuMTI4OTF6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"
                />
              </button>
              <button className="btn btn-square btn-outline btn-primary hover:btn-neutral h-12 w-12">
                <img
                  className="h-6 w-6"
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOC41MzMzMyw4LjUzMzMzKSI+PHBhdGggZD0iTTE1LDNjLTYuNjI3LDAgLTEyLDUuMzczIC0xMiwxMmMwLDUuNjIzIDMuODcyLDEwLjMyOCA5LjA5MiwxMS42M2MtMC4wNTYsLTAuMTYyIC0wLjA5MiwtMC4zNSAtMC4wOTIsLTAuNTgzdi0yLjA1MWMtMC40ODcsMCAtMS4zMDMsMCAtMS41MDgsMGMtMC44MjEsMCAtMS41NTEsLTAuMzUzIC0xLjkwNSwtMS4wMDljLTAuMzkzLC0wLjcyOSAtMC40NjEsLTEuODQ0IC0xLjQzNSwtMi41MjZjLTAuMjg5LC0wLjIyNyAtMC4wNjksLTAuNDg2IDAuMjY0LC0wLjQ1MWMwLjYxNSwwLjE3NCAxLjEyNSwwLjU5NiAxLjYwNSwxLjIyMmMwLjQ3OCwwLjYyNyAwLjcwMywwLjc2OSAxLjU5NiwwLjc2OWMwLjQzMywwIDEuMDgxLC0wLjAyNSAxLjY5MSwtMC4xMjFjMC4zMjgsLTAuODMzIDAuODk1LC0xLjYgMS41ODgsLTEuOTYyYy0zLjk5NiwtMC40MTEgLTUuOTAzLC0yLjM5OSAtNS45MDMsLTUuMDk4YzAsLTEuMTYyIDAuNDk1LC0yLjI4NiAxLjMzNiwtMy4yMzNjLTAuMjc2LC0wLjk0IC0wLjYyMywtMi44NTcgMC4xMDYsLTMuNTg3YzEuNzk4LDAgMi44ODUsMS4xNjYgMy4xNDYsMS40ODFjMC44OTYsLTAuMzA3IDEuODgsLTAuNDgxIDIuOTE0LC0wLjQ4MWMxLjAzNiwwIDIuMDI0LDAuMTc0IDIuOTIyLDAuNDgzYzAuMjU4LC0wLjMxMyAxLjM0NiwtMS40ODMgMy4xNDgsLTEuNDgzYzAuNzMyLDAuNzMxIDAuMzgxLDIuNjU2IDAuMTAyLDMuNTk0YzAuODM2LDAuOTQ1IDEuMzI4LDIuMDY2IDEuMzI4LDMuMjI2YzAsMi42OTcgLTEuOTA0LDQuNjg0IC01Ljg5NCw1LjA5N2MxLjA5OCwwLjU3MyAxLjg5OSwyLjE4MyAxLjg5OSwzLjM5NnYyLjczNGMwLDAuMTA0IC0wLjAyMywwLjE3OSAtMC4wMzUsMC4yNjhjNC42NzYsLTEuNjM5IDguMDM1LC02LjA3OSA4LjAzNSwtMTEuMzE1YzAsLTYuNjI3IC01LjM3MywtMTIgLTEyLC0xMnoiPjwvcGF0aD48L2c+PC9nPgo8L3N2Zz4="
                />
              </button>
            </div>
            <div className="divider text-xs">OR</div>
            <div className="grid h-16 card place-items-center">
              <input
                type="text"
                placeholder="Email"
                className="mt-4 input input-bordered input-primary h-11 w-72 max-w-xs"
              />
              <input
                type="text"
                placeholder="Password"
                className="mt-4 input input-bordered input-primary h-11 w-72 max-w-xs"
              />
              <button className="w-24 btn btn-blue-600 btn-md mt-4 h-11 rounded-2xl hover:shadow-blue-500/50 bg-blue-600 border-none hover:shadow-inner hover:bg-blue-500">
                submit
              </button>
            </div>
          </div>
        </div>
        <div className="imageslide" style={{ left: bgslide ? "50%" : "0" }}>
          <div className="relative w-full h-full">
            <div className="bgtext">
              <h1 className="text-4xl font-semibold leading-snug">
                {bgslide ? (
                  <span>
                    Welcome to <span className="text-sky-500">Cloud</span>
                  </span>
                ) : (
                  <span>
                    Our number{" "}
                    <span className="text-sky-500">1 user is Back!</span>
                  </span>
                )}
              </h1>
              <h3 className="font-medium text-pink-500 mt-8">
                {bgslide
                  ? "Take your first step into the world of possibilities"
                  : "Time to continue on your journy with us"}
              </h3>
              <div
                onClick={() => setbgslide(!bgslide)}
                className="btn btn-outline btn-primary btn-md font-medium rounded-m"
              >
                {bgslide ? "Login" : "Register"}
              </div>
            </div>
            <Image
              src={bg}
              style={{ borderRadius: bgslide ? "0 8px 8px 0" : "8px 0 0 8px" }}
              alt="Form bg"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
