import Bundler from '../std/package/bundle'
import Path from 'path'
import {Registry} from '../std/package/registry.yarn'
import fs from 'fs'

var init= async function(){
    let reg= new Registry()
    let moduledesc = await reg.resolve("zstd-codec@0.1.2")
    

    var outfile= Path.join(__dirname, "dist", "zstd")
    if(!fs.existsSync(outfile)) fs.mkdirSync(outfile)
    outfile= Path.join(outfile, "0.1.2.js")

    var bundler= new Bundler(Path.join(moduledesc.folder,".."))
    bundler.virtualName= 'zstd-codec$0/node_modules'
    bundler.mainScript= "zstd-codec"
    bundler.disableTranspile= true
    await bundler.writeToFile(outfile).bundle()
}

init()