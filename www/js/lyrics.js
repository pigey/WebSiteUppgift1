function getLyrics(){

var artistSearch = document.getElementById("artistSearch").value;
document.getElementById("lyrics").textContent = "";
  $.ajax({
    type: "GET",
    data: {
        apikey:"e087c8d65e867ab873af1f18faed98a4",
        //låtens namn som man söker efter. ändra variabel
        q_track: artistSearch,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.search",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
        console.log(data);
        console.log(data.message.body.track_list[0].track.lyrics_id)
        //ändra rand till låtens namn
        var thisTrack = (rand.q_track)

        var p = document.createElement("p");
        p.textContent = thisTrack;
        p.id = thisTrack;

        var img = document.createElement("img")
        img.setAttribute("src",thisPic)

        document.getElementById("lyrics").appendChild(p).style.opacity = 0;
        document.getElementById("lyrics").appendChild(img);
        document.getElementById("ghost").click();

    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }
  });
 };


 function getLyricsNow(){
    var trackId = document.getElementById("lyrics").textContent;
    console.log(trackId)
  $.ajax({
    type: "GET",
    data: {
        apikey:"445d6196c08dc2b7490929f18149d684",
        track_id: trackId,
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
    dataType: "jsonp",
    jsonpCallback: 'jsonp_callback',
    contentType: 'application/json',
    success: function(data) {
       console.log(data); console.log(data.message.body.lyrics.lyrics_body);
      var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";

        var j = document.createElement("p")
        j.textContent = lyricsBody
        document.getElementById("lyrics").appendChild(j)
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    }
  });
 };
