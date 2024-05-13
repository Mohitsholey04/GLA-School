function toggleChatWindow() {
  const chatContainer = document.getElementById('chat-container');
  if (chatContainer.style.display === 'block') {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const userInput = document.getElementById('user-input');
  const chatMessages = document.getElementById('chat-messages');

  userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const message = this.value.trim();
      if (message !== '') {
        appendMessage('You', message, 'user');
        // Admission chatbot logic to generate response
        const response = generateResponse(message);
        appendMessage('Admissions Officer', response, 'chatbot');
        this.value = '';
      }
    }
  }); 

  function appendMessage(sender, message, type) {
    const messageContainer = document.createElement('div');
    const messageElement = document.createElement('div');
    messageContainer.classList.add('message-container');
    messageElement.classList.add('message', type);
    messageElement.innerHTML = message;
    messageContainer.appendChild(messageElement);
    chatMessages.appendChild(messageContainer);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function generateResponse(message) {
    let response = '';
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('admission details')) {
        response = 'For admissions, please visit our website and fill out the online application form and also call on this Number to know More about Admission Details: 8077128353';
    } else if (lowercaseMessage.includes('requirements for Admission')) {
        response = 'To apply, you need to submit your academic transcripts, recommendation letters, and other required documents. Please check our website for detailed admission requirements.';
    } else if (lowercaseMessage.includes('deadline of Admission')) {
        response = 'The admission deadline for the upcoming academic year is 28 May, 2024. We encourage you to submit your application before the deadline.';
    } else if (lowercaseMessage.includes('contact information')) {
        response = 'If you have any further questions or need assistance with the admission process, you can contact our admissions office and Call at this Number +91 8077128353.';
    } else if (lowercaseMessage.includes('tuition')) {
        response = 'Tuition fees vary depending on the program and level of study. For detailed information about tuition fees, please visit our website or contact our admissions office.';
    } else if (lowercaseMessage.includes('scholarships')) {
        response = 'We offer various scholarships and financial aid options for eligible students. Please visit our website or contact our admissions office for more information on available scholarships and how to apply.';
    } else if (lowercaseMessage.includes('programs') || lowercaseMessage.includes('courses')) {
        response = 'We offer a wide range of programs and courses for students at different levels. You can explore our program offerings on our website or contact our admissions office for more information.';
    } else if (lowercaseMessage.includes('facilities')) {
        response = 'Our school provides state-of-the-art facilities, including libraries, laboratories, sports facilities, and more. For a detailed list of facilities available, please visit our website or schedule a campus tour.';
    } else if (lowercaseMessage.includes('location') || lowercaseMessage.includes('address')) {
        response = 'Our school is located at Chaumuha Mathura. You can find detailed directions on our website or contact our admissions office for assistance.';
    } else if (lowercaseMessage.includes('curriculum')) {
        response = 'Our curriculum is designed to provide students with a comprehensive education that prepares them for success. You can find information about our curriculum on our website or contact our admissions office for details.';
    } else if (lowercaseMessage.includes('accreditation')) {
        response = 'Our school is accredited by CBSE Affiliated from Delhi. Accreditation ensures that our institution meets certain quality standards and that our programs are recognized and respected.';
    } else if (lowercaseMessage.includes('class size') || lowercaseMessage.includes('student-to-teacher ratio')) {
        response = 'Our class sizes vary depending on the program and course. We strive to maintain small class sizes to ensure personalized attention and effective learning experiences.';
    } else if (lowercaseMessage.includes('extracurricular activities')) {
        response = 'We offer a wide range of extracurricular activities, including sports teams, clubs, and community service opportunities. These activities provide students with opportunities for personal growth, leadership development, and social interaction.';
    } else if (lowercaseMessage.includes('international students')) {
        response = 'We welcome international students and provide support services to assist them with the transition to our school. Our international student services include visa assistance, language support, cultural integration programs, and more.';
    } else if (lowercaseMessage.includes('parent involvement')) {
        response = 'We encourage parent involvement in our school community. Parents can participate in various activities such as parent-teacher association meetings, volunteer opportunities, and school events.';
    } else if (lowercaseMessage.includes('technology integration')) {
        response = 'We integrate technology into our curriculum to enhance teaching and learning experiences. Students have access to technology resources such as computer labs, online learning platforms, and interactive classroom tools.';
    } else if (lowercaseMessage.includes('special education services')) {
        response = 'We provide special education services and accommodations for students with diverse learning needs. Our special education team works closely with students, parents, and teachers to develop individualized education plans (IEPs) and support students in reaching their full potential.';
    } else if (lowercaseMessage.includes('college placement')) {
        response = 'Our school offers college placement services to help students navigate the college application process. We provide guidance on selecting colleges, preparing application materials, and preparing for standardized tests such as the SAT and ACT.';
    } else if (lowercaseMessage.includes('health and wellness')) {
        response = 'We prioritize the health and wellness of our students and provide resources to support their physical and mental well-being. These resources include counseling services, health education programs, and wellness activities.';
    } else if (lowercaseMessage.includes('arts programs')) {
        response = 'We offer various arts programs, including visual arts, performing arts, and music programs. Students have opportunities to explore their creative talents and showcase their artwork through exhibitions, performances, and competitions.';
    } else if (lowercaseMessage.includes('community partnerships')) {
        response = 'We have partnerships with local businesses, organizations, and community groups to provide students with real-world learning experiences, internships, and networking opportunities.';
    } else if (lowercaseMessage.includes('environmental initiatives')) {
        response = 'We are committed to environmental sustainability and have implemented various initiatives to reduce our ecological footprint, promote recycling and conservation, and educate students about environmental stewardship.';
    } else if (lowercaseMessage.includes('student support services')) {
        response = 'We offer comprehensive student support services to help students succeed academically, socially, and emotionally. These services include academic tutoring, counseling, mentoring, and peer support programs.';
    } else if (lowercaseMessage.includes('summer programs')) {
        response = 'We offer summer programs and camps for students interested in academic enrichment, skill development, or recreational activities during the summer break.';
    } else if (lowercaseMessage.includes('diversity and inclusion initiatives')) {
        response = 'We are committed to fostering a diverse and inclusive community where all students feel valued and respected. We celebrate diversity and offer programs and initiatives to promote cultural awareness, equity, and inclusion.';
    } else if (lowercaseMessage.includes('career counseling')) {
        response = 'We provide career counseling services to help students explore career options, develop job search skills, and plan for their future. Our career counselors offer guidance on resume writing, interview preparation, and career development strategies.';
    } else if (lowercaseMessage.includes('language programs')) {
        response = 'We offer language programs and courses to help students develop proficiency in foreign languages. These programs enhance students\' cultural understanding and communication skills, preparing them for global citizenship.';
    } else if (lowercaseMessage.includes('student leadership opportunities')) {
        response = 'We offer various student leadership opportunities, including student government, leadership workshops, and community service projects. These opportunities empower students to develop leadership skills, teamwork, and civic engagement.';
    } else if (lowercaseMessage.includes('research opportunities')) {
        response = 'We provide research opportunities for students to engage in hands-on research projects, collaborate with faculty mentors, and contribute to cutting-edge discoveries in their fields of interest.';
    } else {
      response = "I'm sorry, I'm not sure about that. Can you please ask something else related to admissions?";
  }

  return response;
}


  // Function to handle voice input
  function handleVoiceInput() {
    const recognition = new window.webkitSpeechRecognition(); // Create a speech recognition object
    recognition.lang = 'en-US'; // Set language
    recognition.start(); // Start recognition

    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript; // Get the recognized speech
      userInput.value = transcript; // Set the recognized speech as the input value
      // Trigger message sending process
      userInput.dispatchEvent(new KeyboardEvent('keypress', { 'key': 'Enter' }));
    };
  }

  // Add event listener to the voice input button
  const voiceInputButton = document.getElementById('voice-input-button');
  if (voiceInputButton) {
    voiceInputButton.addEventListener('click', handleVoiceInput);
  }
});
