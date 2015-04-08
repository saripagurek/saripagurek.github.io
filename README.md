<h1>Sari website</h1>

<h2>Adding posts</h2>
1. Open `content.rb`
2. Add a new block in the “posts” array:

```ruby
{
  "posts" => [

    # Copy and paste this next part as many times as you need
    {
      "date" => "2015",
      "title" => "Post title",
      "category" => "Art Projects",
      "image" => "photos/GEDC1478.JPG",
      "content" => %q{
        <p>Put any HTML here!</p>
        <ul>
            <li>Here’s a list</li>
            <li>List item</li>
        </ul>
      }
    },

```
2. Double-click on `build.rb`. If there’s an error, double-check that everything is formatted correctly.
3. Commit and sync
