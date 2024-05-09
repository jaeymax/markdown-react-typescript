import { useState } from 'react';
import EyeIcon from '../../assets/icon-show-preview.svg'
import EyeIconClosed from '../../assets/icon-hide-preview.svg'
import './Markdown.css';
import { useAppContext } from '../../context/AppProvider';

interface MarkDownProps{
  markdownText:string,
  setMarkdownText:(text:string)=>void;
}

const Markdown = (props:MarkDownProps) => {

  const {showPreview, updatePreview} = useAppContext();

  return (
    <div className='mkdown' >
        <div className='heading' >
            <h6>MARKDOWN</h6>

            <div className="preview-icon-container" onClick={()=>updatePreview(!showPreview)} >
                <img src={showPreview?EyeIconClosed:EyeIcon} alt="" />
            </div>

        </div>
        <div className="mkdown-text-area">
            <textarea spellCheck = {false} name="md-text-area" value={props.markdownText} onChange={(e)=>props.setMarkdownText(e.target.value)} id="md-text-area"></textarea>
        </div>
    </div>
  )
}

// value={"# Welcome to Markdown\n\nMarkdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.\n\n## How to use this?\n\n1. Write markdown in the markdown editor window\n2. See the rendered markdown in the preview window\n\n### Features\n\n- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists\n- Name and save the document to access again later\n- Choose between Light or Dark mode depending on your preference\n\n> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).\n\n#### Headings\n\nTo create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.\n\n##### Lists\n\nYou can see examples of ordered and unordered lists above.\n\n###### Code Blocks\n\nThis markdown editor allows for inline-code snippets, like this: `<p>I'm inline</p>`. It also allows for larger code blocks like this:\n\n```\n<main>\n  <h1>This is a larger code block</h1>\n</main>\n```"}

export default Markdown
