---
title: "Next Word Prediction Using LSTM"
description: "An end-to-end web app to predict the next word that might be entered by the user. The app uses a type of Deep Learning model known as LSTM for accurate word prediction based on context."
image: "/images/projects/lstm-prediction.png"
link: "/projects/lstm-prediction"
repoUrl: "https://github.com/srivatsacool/Next-Word-Prediction-Using-LSTM"
demoUrl: "https://srivat-1--handwritten-alphanumeric-recognizer-using-cnn-1hkq8f.streamlit.app/Next_Words_Prediction_Using_LSTM"
tags: ["LSTM", "NLP", "Keras", "TensorFlow", "Streamlit", "Deep Learning"]
date: "2024-06-15"
---

## Overview

This project is an end-to-end web application designed to predict the next word in a sequence of text. Leveraging the power of **Deep Learning**, specifically **Long Short-Term Memory (LSTM)** networks, the model analyzes the context of input text to suggest the most probable next word. This kind of technology is foundational to modern predictive text systems seen in smartphones and email clients.

The application is deployed using **Streamlit**, providing a clean and interactive user interface for real-time predictions.

## Features

-   **Real-Time Prediction**: Instantly predicts the next word as you type or submit a phrase.
-   **Context Awareness**: The LSTM model understands sequential dependencies in text, making predictions contextually relevant.
-   **Interactive UI**: Built with Streamlit for a responsive and user-friendly experience.
-   **Text Preprocessing**: Includes robust tokenization and sequence padding to handle various input formats.

## tech Stack

-   **Deep Learning**: TensorFlow, Keras
-   **Model Architecture**: LSTM (Long Short-Term Memory)
-   **Natural Language Processing**: NLTK (Tokenizer)
-   **Web Framework**: Streamlit
-   **Language**: Python 3.x

## How It Works

1.  **Data Collection**: The model was trained on a text corpus (e.g., 'Pride and Prejudice') to learn sentence structures and word associations.
2.  **Preprocessing**: Text data was tokenized and converted into sequences of integers. These sequences were then padded to ensure uniform length for the neural network.
3.  **Model Training**: An LSTM network was trained to predict the next token (word) given a sequence of previous tokens.
4.  **Inference**: When a user inputs text, it is processed similarly, and the model outputs the probability distribution of the next word. The word with the highest probability is returned.

## Installation & Setup

To run this project locally, follow these steps:

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/srivatsacool/Next-Word-Prediction-Using-LSTM.git
    cd Next-Word-Prediction-Using-LSTM
    ```

2.  **Install Dependencies**
    Ensure you have Python installed. Then run:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run the App**
    Launch the Streamlit application:
    ```bash
    streamlit run app.py
    ```

## Future Improvements

-   **Dataset Expansion**: Training on a larger and more diverse corpus (e.g., Wikipedia) to improve prediction versatility.
-   **Bidirectional LSTM**: Implementing Bidirectional LSTMs to understand context from both past and future words (in fill-in-the-blank scenarios).
-   **Beam Search**: Using beam search instead of greedy selection for potentially more coherent sentence completions.
