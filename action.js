const solutions = {
    "Physical Health Issues": [
        { en: "Your body is a temple, treat it with care.", 
          hi: "आपका शरीर एक मंदिर है, इसे ध्यान से संभालें।", 
          sa: "देहं देवालयं, तं सत्कारं कुरु।" 
        },
        { en: "who is temperate in eating, sleeping, working, and recreation attains freedom from all suffering.",
          hi: "जो व्यक्ति खाने, सोने, काम करने और मनोरंजन में संतुलन बनाए रखता है, वह सभी दुखों से मुक्ति प्राप्त करता है।",
          sa: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥ (6.17)"    
        },
        {en: "By controlling the senses, the body and mind find balance and harmony.",
         hi: "इंद्रियों को नियंत्रित करके शरीर और मन में संतुलन और सामंजस्य प्राप्त होता है।",
         sa: "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते। तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥ (2.67)"
        },
        {en: "Excess or deficiency in any habit destroys the body's natural rhythm.",
         hi: "किसी भी आदत में अति या कमी शरीर की प्राकृतिक लय को नष्ट कर देती है।",
         sa: "अत्याहारः च अत्यास्ना न शरीरस्य हितं भवेत।"
        },
        {en: "The purity of food influences the mind and the body.",
         hi: "भोजन की शुद्धता मन और शरीर को प्रभावित करती है।",
         sa: "आहारशुद्धौ सत्त्वशुद्धिः। (17.7)"
        },
        {en: "The wise engage in action to avoid the stagnation of the body and mind.",
         hi: "ज्ञानी व्यक्ति शरीर और मन की निष्क्रियता से बचने के लिए कर्म में संलग्न रहते हैं।",
         sa: "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।"
        },
        {en: "A disciplined body leads to a disciplined mind, bringing ultimate health.",
         hi: "अनुशासित शरीर एक अनुशासित मन को जन्म देता है, जो परम स्वास्थ्य लाता है।",
         sa: "शरीरं नियच्छेत् तेन मनोऽपि स्वधर्मे स्थितम्।"
        },
        { en: "One who stays calm in pleasure and pain is truly healthy.",
          hi: "जो सुख और दुख में समान रहता है, वही वास्तव में स्वस्थ है।",
          sa: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। (2.38) "
        },
     ],
    "Emotional and Mental Health Challenges": [
        { en: "Control your mind, and peace will follow.", 
          hi: "मन को नियंत्रण में रखें, और शांति आपका अनुसरण करेगी।", 
          sa: "मनः संयमः शान्तिम् आनयति।" 
        },
        { en: "who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
          hi: "जिसने अपने मन को जीत लिया है, उसके लिए मन सबसे अच्छा मित्र है; लेकिन जो ऐसा नहीं कर पाता, उसके लिए मन सबसे बड़ा शत्रु बना रहता है।",
          sa: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः। अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥ (6.6)"
        },
        { en: "Let not the mind be disturbed by success or failure; keep yourself steady in equanimity.",
          hi: "मन को सफलता या असफलता से विचलित न होने दें; अपने आप को समानता में स्थिर रखें।",
          sa: "सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते। (2.48) "
        },
        { en: "By renouncing attachment, one achieves peace of mind and clarity.",
          hi: "आसक्ति का त्याग करके, कोई मन की शांति और स्पष्टता प्राप्त करता है।",
          sa: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः। (4.20)"
        },
        { en: "The wise man who is free from fear and anger dwells in peace.",
          hi: "ज्ञानी व्यक्ति जो भय और क्रोध से मुक्त है, वह शांति में निवास करता है।",
          sa: "वितरागभयक्रोधः स्थितधीर्मुनिरुच्यते। (2.56) "
        },
        { en: "One must elevate the self by the self and not degrade it. The mind can be a liberator or a captor.",
          hi: "मनुष्य को अपने आत्मा द्वारा खुद को ऊपर उठाना चाहिए और इसे गिरने नहीं देना चाहिए। मन या तो मुक्त कर सकता है या बंधन में डाल सकता है।",
          sa: "उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥ (6.5)"
        },
        { en: "One who is not disturbed by emotions like anger, fear, and joy, becomes firmly established in wisdom.",
          hi: "जो क्रोध, भय और आनंद जैसी भावनाओं से विचलित नहीं होता, वह ज्ञान में दृढ़ हो जाता है।",
          sa: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥ (2.56)"
        }
        
    ],
    "Financial and Economic Problems": [
        { en: "True wealth lies in contentment.", 
          hi: "सच्ची संपत्ति संतोष में है।", 
          sa: "संतोषे धनं।" 
        },
        { en: "You have the right to perform your duty, but not to the fruits of your action.",
          hi: "तुम्हें अपने कर्म करने का अधिकार है, लेकिन उसके फलों पर नहीं।",
          sa: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥  (2.47)"
        },
        { en: "A person of discipline consumes only what is necessary and is free from excessive desires.",
          hi: "अनुशासन वाला व्यक्ति केवल आवश्यक चीजों का उपभोग करता है और अत्यधिक इच्छाओं से मुक्त होता है।",
          sa: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु। युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥"
        },
        { en: "Greed is one of the three gates to hell; abandon it to prosper.",
          hi: "लोभ नरक के तीन द्वारों में से एक है; इसे त्याग कर समृद्धि पाओ।",
          sa: "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः। कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥ (16.21)"
        },
        { en: "A wise person is content with what they receive, unaffected by gain or loss.",
          hi: "ज्ञानी व्यक्ति जो प्राप्त होता है उससे संतुष्ट रहता है, लाभ या हानि से अप्रभावित।",
          sa: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः। (4.22)"
        },
        { en: "who is satisfied with simple offerings, detached and free from possessiveness, attains peace.",
          hi: "जो साधारण अर्पण से संतुष्ट है, आसक्ति और अधिकार से मुक्त है, वह शांति प्राप्त करता है।",
          sa: "निराशीर्निरममो भूत्वा कर्ता सत्त्वसमावृतः। (18.26)"
        },
        { en: "One who performs actions for the welfare of others, without selfish motives, achieves inner prosperity.",
          hi: "जो दूसरों के कल्याण के लिए निस्वार्थ भाव से कर्म करता है, वह आंतरिक समृद्धि प्राप्त करता है।",
          sa: "योगिनः कर्म कुर्वन्ति संगं त्यक्त्वात्मशुद्धये।"
        },
        { en: "Wealth earned through righteous means sustains, while unrighteous wealth destroys the soul.",
          hi: "धर्म के मार्ग से अर्जित धन जीवन को बनाए रखता है, जबकि अधर्म से अर्जित धन आत्मा को नष्ट करता है।",
          sa: "धर्मेणैव धनं तस्य भूतिहिं साध्यते नृणाम्।"
        }
        
    ],
    "Social and Relationship Issues": [
        { en: "Forgiveness is the key to harmony.", 
          hi: "क्षमा ही सामंजस्य की कुंजी है।", 
          sa: "क्षमया मेलः।" 
        },
        { en: "The wise see no difference between a learned Brahmin, a cow, an elephant, a dog, or an outcaste",
          hi: "ज्ञानी व्यक्ति एक पंडित ब्राह्मण, गाय, हाथी, कुत्ते और चांडाल में कोई भेद नहीं देखते।",
          sa: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥ (5.18)"
        },
        { en: "One who forgives and shows compassion attains peace and wins hearts.",
          hi: "जो क्षमा करता है और करुणा दिखाता है, वह शांति प्राप्त करता है और दिल जीत लेता है।",
          sa: "दया सर्वभूतेषु क्षान्तिरर्जुन सत्त्विकम्।"
        },
        { en: "Perform your duty with love and selflessness, for this nurtures relationships and harmony.",
          hi: "अपने कर्तव्यों को प्रेम और निस्वार्थ भाव से निभाओ, क्योंकि यही संबंधों और सामंजस्य को बढ़ावा देता है।",
          sa: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। (3.8)"
        },
        { en: "Anger leads to delusion, delusion leads to confusion of memory, and from this arises the destruction of relationships.",
          hi: "क्रोध से मोह उत्पन्न होता है, मोह से स्मृति भ्रमित होती है, और इससे संबंधों का नाश होता है।",
          sa: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥ (2.63)"
        },
        { en: "Do not be attached to expectations from others; act with a pure heart to maintain relationships.",
          hi: "दूसरों से अपेक्षाओं से आसक्त न हों; शुद्ध हृदय से कार्य करें और संबंध बनाए रखें।",
          sa: "कर्मफलत्यागिनः नित्यतृप्तः निराश्रयः। (4.20)"
        },
        { en: "One who serves others selflessly is loved by all and becomes a beacon of light in society.",
          hi: "जो दूसरों की निस्वार्थ सेवा करता है, वह सबका प्रिय होता है और समाज में प्रकाशस्तंभ बनता है।",
          sa: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः। (12.15)"
        },
        { en: "An egoistic person disrupts relationships, but humility fosters love and understanding.",
          hi: "अहंकारी व्यक्ति संबंधों को बाधित करता है, लेकिन विनम्रता प्रेम और समझ को बढ़ावा देती है।",
          sa: "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्। (13.8)"
        }
        
    ],
};




document.addEventListener("DOMContentLoaded", () => {
  const selectbtn = document.getElementById("quotes");
  const savebtn = document.getElementById("response");
  const display = document.querySelector(".display");

  let selectedValue;
  let quotesArray;
  let currentQuote; // Store the selected random quote

  // Disable the save button initially
  savebtn.disabled = true;

  // Event listener for the select button
  selectbtn.addEventListener("change", function () {
    selectedValue = selectbtn.value;
    savebtn.disabled = !selectedValue || !solutions.hasOwnProperty(selectedValue);
  });

  // Event listener for the save response
  savebtn.addEventListener("click", () => {
    if (selectedValue && solutions.hasOwnProperty(selectedValue)) {
      // Match the selectedValue with a key in the solutions object
      quotesArray = solutions[selectedValue];

      // Randomly pick one quote from the matched category
      currentQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

      // Call the function to display the quote
      displayQuote(currentQuote);
    } else {
      display.innerHTML = "<p>Please select a valid category!</p>";
    }
  });

  // Function to display the quote in the desired format
  // Function to display the quote in the desired format
function displayQuote(quote) {
  // Hide the question div
  const questionDiv = document.querySelector('.content');
  questionDiv.style.display = 'none';

  // Create a new div for the quote
  const quoteDiv = document.createElement('div');
  quoteDiv.classList.add('quote-container');

  // Add the quote text (initially in English)
  const quoteText = document.createElement('p');
  quoteText.innerText = quote.en; // default to English
  quoteDiv.appendChild(quoteText);

  // Create the translation button
  const translateBtn = document.createElement('button');
  translateBtn.innerText = "Translate";
  // Apply styles to the Translate button
  Object.assign(translateBtn.style, {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "1rem",
    color: "#3A5FCD", // Peacock Blue for text
    backgroundColor: "#F8F9FA", // Soft white background
    border: "2px solid #F4C430", // Golden border
    borderRadius: "8px", // Smooth rounded corners
    padding: "0.57em", // Add padding for a button-like appearance
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    transition: "all 0.3s ease", // Smooth transition for hover effects
    width: "22%",
    marginTop: "0.5em",
    textAlign: "center"
  });

  translateBtn.addEventListener('click', () => {
    // Toggle between English, Hindi, and Sanskrit
    if (quoteText.innerText === quote.en) {
      quoteText.innerText = quote.hi;
    } else if (quoteText.innerText === quote.hi) {
      quoteText.innerText = quote.sa;
    } else {
      quoteText.innerText = quote.en;
    }
  });
  quoteDiv.appendChild(translateBtn);

  // Create the "Go Back" button
  const goBackBtn = document.createElement('button');
  goBackBtn.innerText = "Go Back";
  // Apply styles to the Go Back button
  Object.assign(goBackBtn.style, {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "1rem",
    color: "#3A5FCD", // Peacock Blue for text
    backgroundColor: "#F8F9FA", // Soft white background
    border: "2px solid #F4C430", // Golden border
    borderRadius: "8px", // Smooth rounded corners
    padding: "0.57em", // Add padding for a button-like appearance
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
    transition: "all 0.3s ease", // Smooth transition for hover effects
    width: "22%",
    marginTop: "0.5em",
    textAlign: "center"
  });

  goBackBtn.addEventListener('click', () => {
    // Remove the quote div and show the question div again
    quoteDiv.remove();
    questionDiv.style.display = 'block';
  });
  quoteDiv.appendChild(goBackBtn);

  // Style the quote div with transparent black background and golden border
  quoteDiv.style.position = 'absolute'; // Position it where the question div is
  quoteDiv.style.top = 350 + 'px';
  quoteDiv.style.left = 150 + 'px';
  quoteDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  quoteDiv.style.border = '2px solid #F4C430'; // Golden border
  quoteDiv.style.padding = '20px';
  quoteDiv.style.color = 'white';
  quoteDiv.style.textAlign = 'center';
  quoteDiv.style.borderRadius = '10px';

  // Append the quote div to the display container
  display.appendChild(quoteDiv);
}

});
