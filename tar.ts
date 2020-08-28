import Bundler from '../std/package/bundle'
import Path from 'path'
import {Registry} from '../std/package/registry.yarn'
import fs from 'fs'

var init= async function(){
    let reg= new Registry()
    let moduledesc = await reg.resolve("tar@6.0.5")
    var outfile= Path.join(__dirname,"..", "std","compression", "tar.js")

    outfile= Path.join(__dirname, "dist", "tar")
    if(!fs.existsSync(outfile)) fs.mkdirSync(outfile)
    outfile= Path.join(outfile, "6.0.5.js")

    var bundler= new Bundler(Path.resolve(Path.join(moduledesc.folder,"..")))
    bundler.virtualName= 'tar$6/node_modules'
    bundler.mainScript= "tar"
    bundler.disableTranspile= true
    await bundler.writeToFile(outfile).bundle()
}

init()