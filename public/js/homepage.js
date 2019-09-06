$(document).ready(function() {
  let consentButton = $(".consentButton");
  $(document).on("click", "agree", displayApprovedMap);
  $(document).on("click", "disagree", displayNormalMap);
  var maps;


  function getLandmarks() {
    landmarkId = landmark || "";
    if (landmarkId) {
      landmarkId = "/?landmark_id" + landmarkId
    }
  }
});