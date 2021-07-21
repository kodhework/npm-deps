

import {Registry} from 'gh+/kwruntime/std@1.1.0/package/yarn'
import 'npm://esbuild@0.12.15##esbuild'
import * as esbuild from "esbuild"

import Path from 'path'
import fs from 'fs'




var init= async function(){
    let reg= new Registry()
    
    
    let modname = "zstd-codec"
    let version = "0.1.2"
    let desc = await reg.resolve(modname + "@" + version)
    let folder = Path.join(__dirname, "..", "dist")
    if(!fs.existsSync(folder)) fs.mkdirSync(folder)
    esbuild.buildSync({
        entryPoints: [desc.main],
        bundle: true,
        platform: 'node',
        target: ['node10.4'],
        outfile: Path.join(folder, `${modname}/${version}.js`)
    })


}

init()