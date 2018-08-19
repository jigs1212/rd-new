<?php include 'layout/header-old.php' ?>

<!-- - - - - - - - - - - - - Content - - - - - - - - - - - - - - -->

	<div id="content-bottom-off content-top-off">

		<section id="folio" class="page">

			<section class="section padding-off" id="head_tile" data-title='works_title'>

				<div class="container">

					<div class="row">

						 <div class="col-xs-12">
							<ul id="portfolio-filter" class="portfolio-filter">
								<li class="filter active" data-filter="all">All</li>
								<li class="filter" data-filter="Exterior">Exterior</li>
								<li class="filter" data-filter="Interior">Interior</li>
								<li class="filter" data-filter="Floor Plans">Floor Plans</li>
							</ul>
						</div>

					</div><!--/ .row-->

				</div><!--/ .container-->

				<section id="portfolio-items" class="portfolio-items col-4">

					<!--	<article class="Exterior mix mix_all">

							<div class="work-item-move slideUp3x lazy-image img">
								<div class="lazy">
									<i class="G G_1"></i>
									<i class="G G_2"></i>
									<i class="G G_3"></i>
									<i class="G G_4"></i>
									<i class="G G_5"></i>
									<i class="G G_6"></i>
									<i class="G G_7"></i>
									<i class="G G_8"></i>
								</div>
								<img src="img/homeimg/nepswa.jpg" alt="" />
								<a href="dream-housing.php">
									<div class="image-extra">
										<div class="extra-content">
											<h2 class="extra-title">Neptune Swarajya</h2>
											<h6 class="extra-descript"></h6>
										</div>
									</div>
								</a>
							</div>
						</article>  -->

						<?php
							foreach ($projects as $value) {
								foreach($value[images] as $key => $img){
								?>
								<article class="architecture mix mix_all">

  	  							<div class="work-item-move slideUp3x lazy-image img">
  	  								<div class="lazy">
  	  									<i class="G G_1"></i>
  	  									<i class="G G_2"></i>
  	  									<i class="G G_3"></i>
  	  									<i class="G G_4"></i>
  	  									<i class="G G_5"></i>
  	  									<i class="G G_6"></i>
  	  									<i class="G G_7"></i>
  	  									<i class="G G_8"></i>
  	  								</div>
  	  								<img src="<?php echo $img; ?>" alt="" />
  	  								<a href="gallery.php" >
  	  									<div class="image-extra">
  	  										<div class="extra-content">
  	  											<h2 class="extra-title"><?php echo $value[title]; ?></h2>
  	  											<h6 class="extra-descript"></h6>
  	  										</div>
  	  									</div>
  	  								</a>
  	  							</div>
  	  						</article>
							<?php
						  	}
						}
?>

					</section>

			</section>

		</section>

		<div class="portfolio-paging">
			<a data-rel="3" href="page/grid-move.html" class="load-more">Load More</a>
		</div><!--/ .portfolio-paging-->

	</div><!--/ #content-->


	<!-- - - - - - - - - - - - end Content - - - - - - - - - - - - - -->


	<?php include 'layout/footer.php' ?>
