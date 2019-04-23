setInterval(function() {
//function getLyrics(){

  // ändra baby till datan från spotify api
  var trackSearch = "baby";
  var tidigareTrack = "";

  if (trackSearch != tidigareTrack) {

    document.getElementById("lyrics").textContent = "";
    $.ajax({
      type: "GET",
      data: {
        apikey:"e087c8d65e867ab873af1f18faed98a4",
        q_track: trackSearch,
        format:"jsonp",
        callback:"jsonp_callback"
      },
      url: "https://api.musixmatch.com/ws/1.1/track.search",
      dataType: "jsonp",
      jsonpCallback: 'jsonp_callback',
      contentType: 'application/json',
      success: function(data) {
        var p = document.getElementById("lyricsText");
        p.textContent = data;

      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });
    tidigareTrack = trackSearch;
  }
}, 1000);


//function getLyricsNow(){
//  var trackId = document.getElementById("lyrics").textContent;
//  $.ajax({
//    type: "GET",
//    data: {
//      apikey:"e087c8d65e867ab873af1f18faed98a4",
//      track_id: trackId,
//      format:"jsonp",
//      callback:"jsonp_callback"
//    },
//    url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
//    dataType: "jsonp",
//    jsonpCallback: 'jsonp_callback',
//    contentType: 'application/json',
//    success: function(data) {
//      console.log(data); console.log(data.message.body.lyrics.lyrics_body);
//      var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";
//
//      var j = document.createElement("p");
//      j.textContent = lyricsBody;
//      document.getElementById("lyrics").appendChild(j);
//    },
//    error: function(jqXHR, textStatus, errorThrown) {
//      console.log(jqXHR);
//      console.log(textStatus);
//      console.log(errorThrown);
//    }
//  });
//};
