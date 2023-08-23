import Image from "next/image";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/cjs/styles/prism";

const RenderMD = ({ children, className }) => {
    
  const components = {
    h1({node, children, ...props}){
        return (
            <div className="text-3xl font-DM font-medium pt-5 pb-3">{children}</div>
        )
    },
    p({node, children, ...props}){
      return <p className="py-2 font-DM"> {children}  </p>
    },
    img({ node, alt, src, children, className, ...props }) {
      if (!src) return null;
      return (
        <div className="flex flex-col w-full my-3 items-center justify-center">
          <Image draggable={false} className="pb-5 object-cover rounded-md overflow-hidden mx-auto" width={600} height={500} src={src} alt={alt} />
          <div className="text-sm fontbold font-DM">{alt}</div>
        </div>
      );
    },
    hr({node, ...props}){
      return <hr className="my-3 fill-white"/>
    },
    a({ node, href, children, ...props }) {
      return (
        <a href={href} target="_blank" className="text-cyan-500 hover:text-red-500 hover:underline">{children}</a>
      );
    },
    blockquote({ node, children, ...props }) {
      console.log(typeof children)
      return (
        <div className="bg-[#282828] rounded-sm py-2 px-4 my-2 border-l-4">{children}</div>
      );
    },
    code({ node, inline, className, children, ...props }) {
      var match = /language-(\w+)/.exec(className || "");
      if (!match) {
        match = ['language-text','text']
      }
      if (inline) return (
        <span className="py-1 bg-[#1a1919] px-2 rounded-md font-mono font-medium text-sm">{children}</span>
      ) 
      else {
        return (
          <div className="bg-[#181818] gap-0 flex flex-col my-5 text-sm rounded-md overflow-hidden shadow-lg shadow-[#111111]">
            <div className="flex w-full items-center bg-[#111111]">
              <span className="mx-2.5 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              <span className="mr-2.5 h-2.5 w-2.5 bg-yellow-500 rounded-full"></span>
              <span className="mr-2.5 h-2.5 w-2.5 bg-green-500 rounded-full"></span>
              <span className="flex justify-center py-2 px-4 text-DM text-sm bg-[#0b0b0b]">{match[1]}</span>
              <span onClick={(e)=>{
                e.target.innerText = "Copied!"
                setTimeout(()=>{
                  e.target.innerText = "Copy"
                },600)
                navigator.clipboard.writeText(children)
              }} className="ml-auto py-1 px-4 mx-1 rounded-md cursor-pointer hover:bg-black transition-colors duration-150">Copy</span>
            </div>
            <SyntaxHighlighter language={match[1]} style={ okaidia }>{children}</SyntaxHighlighter>
          </div>
        )
      }
    },
  };

  return (
    <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className={className}
        children={children}
        components={components}
    />
  );
};

export default RenderMD;
