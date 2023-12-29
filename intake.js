document.addEventListener("DOMContentLoaded", function () {
  // Function to generate the paragraph
  function generateParagraph() {
    // Get the selected values from the dropdowns and textarea
    var deviceType = document.getElementById("device").value;
    var issueType = document.getElementById("issue").value;
    var backglassCondition = document.getElementById("backglass").value;
    var hasWaterDamage = document.getElementById("water").value;
    var isFaceIDWorking = document.getElementById("faceid").value;
    var additionalComments = document.getElementById("commentbox").value;

    // Generate the paragraph
    var paragraph = "The customer came in with " + deviceType + "." + "\n";
    paragraph +=
      "The customer states that the device " + issueType + "." + "\n";
    paragraph +=
      "The condition of the Back Glass/Back Case is " +
      backglassCondition +
      "." +
      "\n";
    paragraph += "The customer states that the device " + hasWaterDamage + "." + "\n";
    paragraph += "The customer states that the " + isFaceIDWorking + "." + "\n";
    paragraph += "Additional Comments: " + additionalComments;

    // Display the paragraph in the text-box section
    document.getElementById("output-paragraph").innerText = paragraph;
  }

  // Add an event listener to the button to trigger the generation
  document
    .getElementById("generate-btn")
    .addEventListener("click", generateParagraph);
});

function copyToClipboard() {
  var textToCopy = document.getElementById("output-paragraph").innerText;

  // Create a temporary textarea to copy the text
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  // Select and copy the text
  tempTextArea.select();
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);

  // Notify the user that the text has been copied
  alert("Text copied to clipboard!");
}
