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

  def ButtonCollection
    @content["posts"].select do |post|
      post["category"]=="Button Collection"
    end
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

["Art Projects", "Drawings","index", "Jewelry Sales", "Button Collection"].each do |page|
  templatefile=File.open("templates/#{page}.html", "r")
  templatetext=""
  while line=templatefile.gets
      templatetext+=line
  end
  templatefile.close
  artprojects=File.open("#{page}.html", "w")
  artprojects.puts sari.render(templatetext, content)
  artprojects.close
end


puts "done"
