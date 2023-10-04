import React from 'react'

const Whitelist = () => {
  return (
    <div className="flex items-center justify-center h-1/2 bg-yourBackgroundColor">
        <div className="text-center w-full max-w-[100%]">
            <h2 className="text-white text-[30px] mb-4">BanditList</h2>
            <p className="text-white mb-4 p-[2%]">Check if you are in the BanditList </p>
            <input 
                type="text"
                placeholder="enter wallet address..."
                className="w-3/5 px-4 py-2 text-black rounded"
            />
        </div>
    </div>
  )
}

export default Whitelist