require 'fileutils'

Jekyll::Hooks.register :posts, :post_write do |post|

    local_path = File.dirname(__FILE__)
    project_base_path = File.expand_path("../", local_path)

    #puts post.site.dest

    post_src_folder_path = File.dirname(post.path)
    post_dest_file_path = post.destination post.site.dest

    split_post_dest_file_path = post_dest_file_path.split("/")
    post_folder_name = split_post_dest_file_path[split_post_dest_file_path.length - 2]
    post_dst_folder_path = File.join(project_base_path,'_site',post_folder_name)


    # puts post_src_folder_path
    # puts post_dst_folder_path


    FileUtils.copy_entry(post_src_folder_path, post_dst_folder_path)

    system "ffmpeg -i " + post_dst_folder_path + "/images/header.png -vf scale=300:171 " +  post_dst_folder_path + "/images/header_thumb.png"

    #FileUtils.copy_entry('/Stuff/Dropbox/1_current/3_logic_room/_posts/1_angular_2_modules_and_components_article','/Stuff/Dropbox/1_current/3_logic_room/_site/modules-and-components-article')

    #post_dest_path
    #puts post_folder_name #'welcome-to-jekyll'


end