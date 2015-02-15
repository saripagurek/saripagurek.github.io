require "mustache"
require "json"
require "pathname"
require "htmlentities"

contentfile=File.open("content.json", "r")
contenttext=""
while line=contentfile.gets
    contenttext+=line
end
contentfile.close
content=JSON.parse(contenttext)

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
	def videostuff
		posts=[]
		for post in @content["posts"]
			if post["category"]=="videostuff"
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
videostuffStuff=File.open("Videos.html", "w")
videostuffStuff.puts sari.render(templatetext, content)
videostuffStuff.close

templatefile=File.open("templates/index.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
videostuffStuff=File.open("index.html", "w")
videostuffStuff.puts sari.render(templatetext, content)
videostuffStuff.close