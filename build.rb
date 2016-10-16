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

  def Other
    @content["posts"].select do |post|
      post["category"]=="Art Projects" and post["topic"]=="Other"
    end
  end

  def Zentangles
    @content["posts"].select do |post|
      post["category"]=="Art Projects" and post["topic"]=="Zentangles"
    end
  end
  def ArtProjects
    @content["posts"].select do |post|
      post["category"]=="Art Projects"
    end
  end

	def Drawings
    @content["posts"].select do |post|
      post["category"]=="Drawings"
    end
	end

	def JewelrySales
    @content["posts"].select do |post|
      post["category"]=="Jewelry Sales"
    end
	end

	def NewPosts
		return (@content["posts"].select do |post|
      post["recent"]
    end)[0..5]
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

templatefile=File.open("templates/Jewelry Sales.html", "r")
templatetext=""
while line=templatefile.gets
    templatetext+=line
end
templatefile.close
videoStuff=File.open("Jewelry Sales.html", "w")
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
