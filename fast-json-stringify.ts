import Bundler from '../std/package/bundle'
import Path from 'path'
import {Registry} from '../std/package/registry.yarn'
import fs from 'fs'

var init= async function(){
    let reg= new Registry()
    
    
    let modname = "fast-json-stringify"
    let version = "2.2.3"
    let outfile_name = "std/http/fast-json-stringify/mod"
    let moduledesc = await reg.resolve(modname, version)

    var outfile= Path.join(__dirname,"dist", modname)
    if(!fs.existsSync(outfile)) fs.mkdirSync(outfile)
    outfile= Path.join(outfile, version + ".js")
    
    var bundler= new Bundler(Path.resolve(Path.join(moduledesc.folder,"..")))
    bundler.virtualName= modname + '$0/node_modules'
    bundler.mainScript= modname
    bundler.disableTranspile= true
    await bundler.writeToFile(outfile).bundle()
}

init()