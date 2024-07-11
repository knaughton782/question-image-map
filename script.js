const questions = [
    // record the question, image, and correct position for each question on the image
    {
        question: "Clue: In the memory maze, where experiences entwine, find the seahorse-shaped region, where recollections shine. Poor HM couldn't transfer short term to long-term memory.  He had damage to this region bilaterally. ",
        image: "images/brain-image4.png",
        answer: "Hippocampus",
        correctX: 300.5,
        correctY: 235.67,
        tolerance: 10
    },
    {
        question: "Clue: At the brain's command center, where decisions unfold. This lobe controls personality, plans, and goals. Seek the region that guides your actions and will.  Was there a surgery that was used to disconnect this region from other areas of the brain? Or is it better to just take a pill?  ",
        image: "images/brain-image1.png",
        answer: "Frontal Lobe",
        correctX: 117,
        correctY: 95.67,
        tolerance: 40
    }
    ,
    {
        question: "Clue: In the sensory playground, where touch takes its throne. This lobe interprets sensations, a zone of its own. Find the region that navigates the somatosensory sea.",
        image: "images/brain-image1.png",
        answer: "Parietal Lobe",
        correctX: 333.5,
        correctY: 119.67,
        tolerance: 40
    }
    ,
    {
        question: "Clue: In the auditorium of sound, where we first make sense of someone's conversations with us. This lobe processes hearing or audition so we don't just hear mush.",
        image: "images/brain-image3.png",
        answer: "Temporal Lobe",
        correctX: 202.5,
        correctY: 241.67,
        tolerance: 40
    }
    ,
    {
        question: "Clue: At the back of the brain, where visions are spun. This lobe processes sight when the day is done. Discover the region that deciphers the visual world.",
        image: "images/brain-image1.png",
        answer: "Occipital Lobe",
        correctX: 391.5,
        correctY: 228.67
    }
    ,
    {
        question: "Clue: In the coordination station, where balance takes command, this structure orchestrates movements, oh so grand. Indeed, despite their tiny brains, even reptiles have this region. A disease associated with this region is called?",
        image: "images/brain-image1.png",
        answer: "Cerebellum",
        correctX: 335.5,
        correctY: 286.67,
        tolerance: 40
    }
    ,
    {
        question: "Clue: Place where vital signs reside. This part controls heartbeat and breath, a guide. Seek the region that regulates life's most basic functions.",
        image: "images/brain-image1.png",
        answer: "Medulla",
        correctX: 250.5,
        correctY: 329.67,
        tolerance: 10
    }
    ,
    {
        question: "Clue: Connecting bridges in the brain, a relay to awake or asleep.  What's the name of this region through which the reticular activating system passes each day?",
        image: "images/brain-image1.png",
        answer: "Pons",
        correctX: 245,
        correctY: 277.67,
        tolerance: 20
    }
    ,
    {
        question: "Clue: In the realm of movement, where neurons play. Noted for dopamine and plays a role in Parkinson's Disease.",
        image: "images/brain-image2.png",
        answer: "Reticular Activating System / Reticular Formation",
        correctX: 433,
        correctY: 152.67,
        tolerance: 20
    }
    ,
    {
        question: "Clue: The brain's switchboard, a sensory relay station. This relay station ensures information's from your senses goes to the right area of the brain.  Seek the region that directs sensory mail.",
        image: "images/brain-image1.png",
        answer: "Thalamus",
        correctX: 246,
        correctY: 175.67,
        tolerance: 15
    }
    ,
    {
        question: "Clue: This is the control room of the body and manages hunger, thirst, and glee.",
        image: "images/brain-image4.png",
        answer: "Hypothalamus",
        correctX: 249,
        correctY: 193.67,
        tolerance: 15
    }
    ,
    {
        question: "Clue: A bridge of fibers, connecting left and right, this structure ensures the brain's communication is tight. What's the name of this link, where information flows in sync?",
        image: "images/brain-image1.png",
        answer: "Corpus Callosum",
        correctX: 165.5,
        correctY: 137.67,
        tolerance: 15
    }
    ,
    {
        question: "Clue: In the emotional core, where feelings take flight, this almond-shaped region guides emotions, so bright. What's the name of this region where joy, anger, and fear intertwine?",
        image: "images/brain-image4.png",
        answer: "Amygdala",
        correctX: 251.5,
        correctY: 222.67,
        tolerance: 10
    }
    ,
    {
        question: "Clue: In the speech domain, where words take their stand, This area shapes language, a linguistic band. Seek the region that weaves words like a loom. If you are talking to me, you are in this linguistic room?",
        image: "images/brain-image3.png",
        answer: "Broca's Speech Area",
        correctX: 203.5,
        correctY: 150.67
    }
    ,
    {
        question: "Clue: In the language realm, where comprehension takes the lead, this area interprets meaning, a linguistic deed. Find the region that deciphers words with grace, What's the name of this linguistic space?",
        image: "images/brain-image3.png",
        answer: "Wernicke's Speech Area",
        correctX: 262.5,
        correctY: 197.67
    }
    ,
    {
        question: "Clue: In the sensory landscape, where touch finds its way, this cortex interprets sensations every day. Seek the region that maps the body's parts that you feel? Can you identify its neighbor that helps you know what has moved?",
        image: "images/brain-image3.png",
        answer: "Somatosensory Cortex",
        correctX: 253.5,
        correctY: 38.67
    }

    // Add more questions as needed
];


let currentQuestionIndex = 0;

function loadQuestion(index) {
    document.getElementById('question').innerText = questions[index].question;
    document.getElementById('hunt-image').src = questions[index].image;
    document.getElementById('feedback').src = questions[index].answer;
}

document.getElementById('hunt-image').addEventListener('click', function(event) {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (isCorrectPosition(x, y)) {
        displayFeedback('Correct! That area of the brain is the ' + questions[currentQuestionIndex].answer + '.');
        placeMarker(x + 40, y + 15);
        // Move to the next question after a delay
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(currentQuestionIndex);
                document.getElementById('feedback').innerText = '';
                document.querySelectorAll('.marker').forEach(marker => marker.remove());
            } else {
                displayFeedback('Congratulations! You have completed the Brain Scavenger Hunt.');
            }
        }, 2500);
    } else {
        displayFeedback('Try again!');
    }
});

function isCorrectPosition(x, y) {
    const correctX = questions[currentQuestionIndex].correctX;
    const correctY = questions[currentQuestionIndex].correctY;
    // const tolerance = 30;
    const tolerance = questions[currentQuestionIndex].tolerance || 30;

    return Math.abs(x - correctX) <= tolerance && Math.abs(y - correctY) <= tolerance;
}

function displayFeedback(message) {
    document.getElementById('feedback').innerText = message;
}

function placeMarker(x, y) {
    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${x}px`;
    marker.style.top = `${y}px`;
    document.getElementById('hunt-image-container').appendChild(marker);
}

// Load the first question
loadQuestion(currentQuestionIndex);
