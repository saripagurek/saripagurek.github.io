require "mustache"

urls=Dir["*.{jpg,png}"].sort_by{ |f| File.mtime(f) }
urls=urls.reverse

templatefile=File.open("latest-template.txt", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close

latestfile=File.open("latest.txt", "w")
latestfile.puts Mustache.render(templatetext, {
    "number" => urls.length,
    "url"=>urls[0]
})



templatefile=File.open("index-template.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close

latestfile=File.open("index.html", "w")
latestfile.puts Mustache.render(templatetext, {
    "urls"=>urls
})


puts "done"

