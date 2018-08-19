<?php
include 'variables/img_variables.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <!-- Gallery css -->
        <link rel="stylesheet" href="css/jgallery.min.css" />
        <link rel="stylesheet" href="css/font-awesome.min.css" />
    </head>
    <body>
        <?php
            $url =  "//{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
            $parts = parse_url($url);
            parse_str($parts['query'], $query);
            $id = $query['id'];
        ?>
            <div id="album">
                <div data-jgallery-album-title="Ray Dimension" class="album">
                    <?php foreach ($projects as $key => $project): ?> 
                        <?php foreach ($project['images'] as $key => $img): ?>
                            <a href="<?php echo $img; ?>"><img alt="" src="<?php echo $img; ?>" class="img-hide"></a>
                        <?php endforeach; ?>
                    <?php endforeach; ?>
                </div>
            </div>

    </body>
    <script src="js/jquery-2.0.3.min.js"></script>
    <script src="js/jgallery.min.js"></script>
    <script src="js/tinycolor-0.9.16.min.js"></script>
    <script src="js/touchswipe.min.js"></script>
    <script type="text/javascript">
    //<![CDATA[
    $( function() {
        $('.img-hide').css({
            'display':'none'
        });
        $( '#album' ).jGallery( {
           // autostart: true,
            zoomSize: '100%'
        } );
    } );
    //]]>
    </script>
</html>
