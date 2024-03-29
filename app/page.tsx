"use client"

import {useState} from "react"
import Image from "next/image"
 //@ts-ignore
import ColorThief from "colorthief"
import ColorСircle from "./Components/ColorСircle"

export default function Home() {

  const [image, setImage] = useState("")
  const [mainColor, setMainColor] = useState([])
  const [patterColor, setPatterColor] = useState([])

  const uploadImage = ( e:any ) => {;
    setImage(URL.createObjectURL(e.target.files[0]))
  }

  const clearImage = () => {
    setImage("")
  }

  const getColors = ( e: any ) => {
    const colorThief = new ColorThief();
    setMainColor(colorThief.getColor(e.target))
    setPatterColor(colorThief.getPalette(e.target, 5))
  }

  return (
    <main className="w-full h-auto py-2">
      <div className="w-[800px] h-auto mx-auto">
        {!image && 
        
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" onChange={uploadImage} className="hidden" />
          </label>
        </div>

        }
        {image && 
        <div className="w-full h-auto flex flex-col items-center">
          <Image src={image} alt="image" width={450} height={350} onLoad={getColors} onDoubleClick={clearImage} className="rounded" />
          <div className="w-full mt-4 flex justify-between">
            <div className="w-1/3">
              <h2 className="text-white text-lg mb-2">Main Color</h2>
              <ColorСircle colors={mainColor} />
            </div>
            <div className="w-2/3">
              <h2 className="text-white text-lg text-center mb-2">Patter Color</h2>
              <div className="w-full flex justify-between">
                {patterColor.map((color) => {
                  return <ColorСircle colors={color} />
                })}
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </main>
  )
}
