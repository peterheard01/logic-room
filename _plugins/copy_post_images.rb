

Jekyll::Hooks.register :posts, :post_render do |post|

    local_path = File.dirname(__FILE__)
    project_base_path = File.expand_path("../", local_path)



   puts post.site.dest
   puts post.destination post.site.dest







end