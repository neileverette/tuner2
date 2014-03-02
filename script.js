
$(document).ready(function(e){	


//// GLOBAL VARIABLES
	//// ALBUM TITLES
		var titleArray = [ "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz", "Rocky Horror Picture ", "Girl on Fire", "Must Be Nice", "People of the World","Holding Sky","When You Were Mine","Goblin", "Chromeo", "A Real Live One", "One in a Million", "Obsession", "Flowers in Your Haiur", "Night Visions", "Muppets Rawk", "Good News For People Who Like Bad News", "Art Pop", "Finally Rich", "I'm In Love With Your Mom", "Believe", "Dedication4", "Moon","Graduation", "The World Should Know", "Salute Me, Shoot Me", "Vicious Lies", "Just Feels Good", "The Sun Comes Out At Night", "Girl Gone Wild", "Bangerz"];
		
	//// ARTISTS TITLES
		var artistArray = [ "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus", "Various Artists ", "Alicia Keys", "Plndr", "Burning Spear","Throne and Lion", "Bruno Mars","Tyler the Creator","Amerigo Gazaway", "Iron Maiden", "Aaliyah", "Shane Ward", "The Lumineers", "Imagine Dragons", "Sesame Street", "Modest Mouse", "Lady Gaga", "Cheif Keef", "Angry Somoans", "Justin Bieber", "Lil Wayne", "Reonda", "Kayne West", "Burning Spear", "DJ Holiday", "Dangerous", "Thompson Square", "Filter", "Madonna", "Miley Cirus"];


	
	
// SIDE MENU FUNCTION
	function sideMenu(){
		$('.menu-hover').on({
			'mouseleave': function(){
				var $menu = $(".side-menu");
					$menu.animate({
					left: 300
				})
			}
		})
	
		// ANIMATES THE SIDE MENU
		$(".menu-hover").on({
			'mouseenter': function (e) {
				e.stopPropagation();
							var $menu = $(".side-menu");
							$menu.animate({
							 left: parseInt($menu.css('left')) < 1 ?
							 $menu.css('left') == 0 :
								0})
						   }
		});
	}	


// WRITES THE LABLES IN THE LEFT MENU
	function writeLabels(){
		
		//// SLIDE OUT MENU VARIABLES
		var menuArray = [ "Search", "New Station", "Manage Stations" , "History", "Settings", "Help"];
		
		// Loop that adds individual items to the menu
		for ( var i = 0; i < menuArray.length; i++ ) {
		   // $('.side-menu').append("<p class = \"menutext\">" +labelArray[i] + "</p>");
		   $('.side-menu').append("<p class = \"menutext\">"+menuArray[i] +"</p>");
		}
	}


// WIRTE LABELS UNDER THE TUNER BAR
	function writeStations(){
		
		// LABELS UNDER THE TUNER GRAPHIC
		var labelArray = [ "My Stations", "Spotlight", "Pop", "Rock", "Dance", "Electronic", "HipHop", "R&B", "Ambient", "Chill", "World", "Jazz", "Country" ];
		
		for ( var i = 0; i < labelArray.length; i++ ) {
			$('.labels').append("<p class = \"stationlabels\">" +labelArray[i] + "</p>");
		}
	}
	
	
// DRAWS THE RIDGES
	function drawRidges(){
		for ( var i = 0; i < 400; i++ ) {
			// This loop creates the ridge graphics and appends each with its own ID and places them to the ridge div
			$('.tuner').append("<div class = \"ridge\" id = \"ridge"+ i +"\"><div class = \"ridgegraphic\"></div></div>");
		}
	}
		

// ALLOWS PLAYHEAD TO BE DRAGGABLE
function dragPlayhead(){
		
		// VARIABLES FOR THE FUNCTION		
		
		// Playhead
		var playhead = Math.floor($('.playhead').offset().left);
		
		// Get the width of the invisible hit area of the playhead
		var playheadWidth = Math.round($('.playhead').width());
				
		// Determines the bounding box of the tuner from the left side of the window
		var tunerStartPosition = Math.round($('.tuner').offset().left);
				
		// Gets the width of the neddle graphic
		var needleGraphic = $('.playheadgraphic').width();
				
		// Calculates the staring point of the tuner grahic 
		var tunerStart = tunerStartPosition - playheadWidth/2 + needleGraphic;
				
		// Calculates the width of the tuner area
		var tunerWidth = $('.tuner').width();
				
		// Sets the end point of the tuner by add the width to the starting point
		var tunerEnd = tunerStart + tunerWidth - needleGraphic;	
		
		// DRAG FUNCTION ONLY ON THE X AXIS
		$(function() {
			// WHILE THE PLAYHEAD IS WITHEN BOUNDS OF THE TUNER BAR, ALLOW IT TO BE DRAGGED
				$('.playhead').draggable({ axis: "x" });
			});	
	
		// SWAP BACKGROUND IMAGE AS THE PLAYHEAD MOVES
			$('.playhead').draggable(
				{drag: function(){
							
					// Gets the position of the playhead
					var offset = $(this).offset();
					var xPos = Math.round(offset.left);
					
					// SETS THE INCREMENT LEVEL OF STATIONS
					var increments = tunerWidth/10;
					
					for (var i=0; i<increments; i++){
						
						var position = i*10 + tunerStart;
					
						// Changes the background image depending on the playhead position
						if (xPos == position){
							$('.background').css("background-image", "url(images/image"+i+".jpg)");
							$('.songName').text(titleArray[i]);
							$('.artistName').text(artistArray[i]);
						}
					}
				}
			});
	}


// SET PRESETS WHEN TAPPING THE + BUTTON
function setPreset(){
	
	var presetButton = $('#add'); // GRAB THE ADD BUTTON
	
	var i = 0; // START A COUNTER FOR UNIQUE PRESET LOCATIONS
	
	//CAPTURE THE X POSITION OF THE CLICK WITHIN THE TUNER REGION
	presetButton.click(function(){
		
		//VARIABLES FOR THE FUNCTION
		var playhead = $('.playheadgraphic');
		var playheadHitArea = $('.playhead').width();
		var position = parseInt(playhead.offset().left);
		var xPosition = (position-playheadHitArea- playheadHitArea/2);
	
		i++; // increment the counter
		
		//APPEND THE PRESET AFTER THE TUNER DIV
		$('.tuner').append("<div id = \"preset"+i+"\" class=\"preset\"></div>");
		
		//SET THE X POSITION OF THE PRESET
		$( ".preset:last" ).css("left", xPosition);	
	});
}



// MOVE NEEDLE POSITION
function moveNeedle(x){
	
	// VARIABLES
	var playhead = $('.playhead');
	
	// ANIMATE THE PLAYHEAD TO THE PASSED PARAMETER X
	playhead.animate({ left: x},500, 'easeOutElastic',{duration: 200});
}




// CLICK GO DIRECTLY TO ANY POINT ON THE TUNER
function clickToTune(){
	
		//VARIABLES FOR THE FUNCTION
		var playhead = $('.playhead');
		var playheadNeedle = $('.playheadgraphic');
		var tuner = $('.tuner');
		
		// TEST TO SEE IF TUNER HAS BEEN CLICKED
		tuner.click(function(e){
			var needlePosition = e.pageX - 2*(playhead.width())- playheadNeedle.width()/2;	
			moveNeedle(needlePosition); // AFTER THE TUNER HAS BEEN CLICKED, MOVE THE PLAYHEAD GRAPHIC 
		});		
}

		
// RUN THESE FUNCTIONS ONCE THE PAGE LOADS		
		sideMenu(); 	// CREATES THE SIDE MENU
		drawRidges(); 	// DRAW RIDGES IN THE TUNER BAR
		writeLabels();	// WRITE THE LABELS IN THE RIGHT HAND HIDDEN MENU
		dragPlayhead()  // ALLOWS PLAYHEAD TO BE DRAGGABLE
		writeStations() // WRITE STATION LABELS UNDER TUNER BAR
		setPreset(); 	// SET PRESETS WHEN TAPPING THE + BUTTON
		clickToTune(); 	// CLICK TO TUNE FUNCTION		
});
	
	
 
 
	