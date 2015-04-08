require "mustache"
require "json"
require "pathname"
require "htmlentities"

contentfile=File.open("content.rb", "r")
contenttext=""
while line=contentfile.gets
    contenttext+=line
end
contentfile.close
content=eval(contenttext)


class Sari < Mustache
	def initialize (content)
		@content=content
	end

	def ArtProjects
		posts=[]
		for post in @content["posts"]
			if post["category"]=="Art Projects"
				if post["title"] == "Zentangles"
					post["a"] = "zentangle"
				end
				if post['title']=="Other"
					post["a"]="Other"
				end
				posts.push(post)
			end
		end
		return posts
	end
	def Drawings
		posts=[]
		for post in @content["posts"]
			if post["category"]=="Drawings"
				posts.push(post)
			end
		end
		return posts
	end
	def Videos
		posts=[]
		for post in @content["posts"]
			if post["category"]=="Videos"
				posts.push(post)
			end
		end
		return posts
	end
	def NewPosts
		return @content["posts"][0..10]
	end
end
sari=Sari.new(content)

templatefile=File.open("templates/Art Projects.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
artprojects=File.open("Art Projects.html", "w")
artprojects.puts sari.render(templatetext, content)
artprojects.close

templatefile=File.open("templates/Drawings.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
drawingsstuff=File.open("Drawings.html", "w")
drawingsstuff.puts sari.render(templatetext, content)
drawingsstuff.close

templatefile=File.open("templates/Videos.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
videoStuff=File.open("Videos.html", "w")
videoStuff.puts sari.render(templatetext, content)
videoStuff.close

templatefile=File.open("templates/index.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
indexStuff=File.open("index.html", "w")
indexStuff.puts sari.render(templatetext, content)
indexStuff.close

puts "done"
wait = gets
