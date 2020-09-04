import React from 'react'
import {ReactComponent as FyloLogo} from '../../assets/logo.svg'
import {ReactComponent as Upload} from '../../assets/icon-upload.svg'
import {ReactComponent as Document} from '../../assets/icon-document.svg'
import {Folder} from '../../assets/icon-folder.svg'
const FyloDataUpload = () => {
    return (
        <div className="text-white w-full flex justify-center">
            <div className="bg-dark-blue shadow-2xl w-48 md:w-80 h-48 rounded-b-lg rounded-tl-lg rounded-tr-xxl flex flex-col  pt-8 pl-8 pb-8 pr-32">
                <div className="w-full">
                    <FyloLogo/>
                </div>
                <div className="flex items-center justify-between pt-12 w-full">
                    <div className="p-2 h-6 rounded-md flex items-center bg-very-dark-blue">
                        <div className="h-4">
                            <Document/>
                        </div>
                        
                    </div>
                    <div className="p-2 h-8 rounded-md flex items-center bg-very-dark-blue">
                        <div className="h-8">
                            <img src={Folder} alt=""/>
                        </div>
                    </div>
                    <div className="p-2 h-6 rounded-md flex items-center bg-very-dark-blue">
                        <div className="h-4">
                            <Upload/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default FyloDataUpload
