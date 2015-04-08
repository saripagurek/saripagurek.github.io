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
3. Double-click on `build.rb`. If there’s an error, double-check that everything is formatted correctly.
4. Open up `index.html` or any other HTML file in your browser to see how things look. If you make changes to `content.rb`, you need to run `build.rb` again and reload the page in the browser.
5. Commit and sync
