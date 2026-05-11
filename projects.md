\# Projects — Srivatsa Gorti

> Master list for the portfolio website projects page. Each entry contains a title, description, hero image, GitHub link, and live demo link (where available).

---

## 1. Just Drift — 8-Bit Arcade Police Chase

**Tags:** `Node.js` · `Socket.IO` · `Game Dev` · `Docker` · `WebSockets`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/just_drift/main/assets/hero.png`

**Short Description:**
An 8-bit arcade chase game where a phone acts as the controller and a larger screen runs the action in real time.

**Long Description:**
Outrun the cops. Drift to survive. Just Drift is a top-down 8-bit arcade chase game built on a novel dual-screen architecture: the game renders on a laptop or TV while the player's phone serves as the controller, connected in real-time via WebSocket. The architecture itself is the innovation — pairing a touch-optimized mobile gamepad with a high-performance HTML5 Canvas game engine, synchronized through Socket.IO with sub-50ms latency. Features smart AI police with escalating aggression, six power-up types, coin collection, shooting mechanics, and procedurally generated 8-bit audio via the Web Audio API. The retro pixel art aesthetic — CRT scanline overlays, glitch text, and synthwave palette — is meticulous. Deployed on Docker with Nginx reverse proxy and Cloudflare SSL. Live at [jdrift.buildsrivatsa.qzz.io](https://jdrift.buildsrivatsa.qzz.io).

**Tech Stack:** Node.js, Express, Socket.IO, HTML5 Canvas, Web Audio API, Docker, Nginx, Cloudflare

**GitHub:** [github.com/srivatsacool/just_drift](https://github.com/srivatsacool/just_drift)

**Live Demo:** [Play Now](https://jdrift.buildsrivatsa.qzz.io)

---

## 2. Automatic License Plate Recognition with OCR

**Tags:** `Python` · `Computer Vision` · `OCR` · `Deep Learning` · `Flask`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Automatic-License-Plate-Recognition-with-OCR/main/assets/hero.png`

**Short Description:**
A computer vision app that detects vehicle number plates and reads them automatically from images, video, or live feeds.

**Long Description:**
Traffic surveillance reinvented — this end-to-end web application combines real-time computer vision with optical character recognition to automatically detect and read vehicle license plates from live camera feeds or uploaded footage. Built to address a real public safety problem, the system detects overspeeding drivers and cross-references their number plates to alert local authorities in near real-time. The pipeline chains YOLOv7-based plate detection with a dedicated OCR module, wraps it in a clean Flask web interface, and delivers actionable output without manual intervention. What makes this project stand out is its civic purpose: it bridges AI research and law enforcement infrastructure in a way that's immediately deployable. The architecture is modular — plate detection, OCR, and alerting are independent components that can be swapped or upgraded independently.

**Tech Stack:** Python, OpenCV, YOLOv7, Tesseract OCR, Flask

**GitHub:** [github.com/srivatsacool/Automatic-License-Plate-Recognition-with-OCR](https://github.com/srivatsacool/Automatic-License-Plate-Recognition-with-OCR)

**Live Demo:** [Play Now](https://srivatsacool-combine-1--license-plate-detection-with-ocr-abxfk4.streamlit.app/)

---

## 3. Handwritten AlphaNumeric Recognizer (CNN)

**Tags:** `Python` · `CNN` · `Computer Vision` · `Flask` · `Interactive`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Handwritten_AlphaNumeric_Recognizer_using_CNN/main/assets/hero.png`

**Short Description:**
An interactive CNN-powered web app that recognizes handwritten letters and digits drawn directly on a canvas.

**Long Description:**
Draw anything — a letter, a number — and watch a neural network figure it out in real time. This interactive web app puts a live canvas in the user's hands, letting them draw any alphanumeric character (A–Z, 0–9) which the trained CNN model then identifies with audio feedback. Beyond the novelty, this project tackles a genuinely hard problem: human handwriting varies wildly, and a robust recognizer must handle noise, partial strokes, and inconsistent proportions. Trained on the EMNIST dataset, the model generalizes well to unseen handwriting styles. The Flask server streams predictions back within milliseconds, creating an experience that feels instantaneous. This is the evolved, full-featured version — built after the numeric-only prototype proved the concept, and extended to the full alphanumeric space.

**Tech Stack:** Python, TensorFlow/Keras, CNN, EMNIST Dataset, Flask, HTML5 Canvas

**GitHub:** [github.com/srivatsacool/Handwritten_AlphaNumeric_Recognizer_using_CNN](https://github.com/srivatsacool/Handwritten_AlphaNumeric_Recognizer_using_CNN)

**Live Demo:** [Play Now](https://srivat-1--handwritten-alphanumeric-recognizer-using-cnn-1hkq8f.streamlit.app/)

---

## 4. Baka Gesture Bubble Shooter

**Tags:** `Python` · `Computer Vision` · `MediaPipe` · `Game` · `Hand Tracking`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/baka-gesture-bubble-shooter/main/assets/hero.png`

**Short Description:**
A webcam-controlled Bubble Shooter clone that uses real-time hand gestures instead of mouse or keyboard input.

**Long Description:**
Ditch the mouse — play with your hands. Baka Gesture Bubble Shooter is a hands-free, computer-vision-powered clone of the classic Bubble Shooter game where players aim and fire bubbles using real-time hand gestures tracked through the webcam. MediaPipe's hand-tracking model maps finger positions and pinch gestures to in-game controls rendered on an HTML5 Canvas, creating a seamless bridge between physical movement and digital interaction. The real engineering challenge here is latency: computer vision inference must be fast enough that gesture controls feel responsive, not laggy. The solution uses efficient landmark sampling and predictive smoothing to keep the experience fluid at standard webcam framerates. This project sits at the intersection of game development and applied computer vision — proving that ML models don't have to live in notebooks.

**Tech Stack:** Python, MediaPipe, OpenCV, HTML5 Canvas, JavaScript

**GitHub:** [github.com/srivatsacool/baka-gesture-bubble-shooter](https://github.com/srivatsacool/baka-gesture-bubble-shooter)

**Live Demo:** [Play Now](https://baka-gesture-bubble-shooter.pages.dev/)

---

## 5. BakaTracker

**Tags:** `TypeScript` · `Next.js` · `Full-Stack` · `Productivity`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/BakaTracker/main/assets/hero.png`

**Short Description:**
A full-stack productivity app for tracking habits, tasks, and goals in a lightweight, opinionated workflow.

**Long Description:**
A full-stack personal productivity and tracking application built with Next.js and TypeScript. BakaTracker was born from a personal need: a lightweight, opinionated system for tracking habits, tasks, and goals without the bloat of commercial tools. The architecture reflects modern full-stack best practices — server components, API routes, and a clean data layer — built to be fast, reliable, and extensible. What makes it interesting from a portfolio perspective is that it's a real tool used daily, not a demo project. Every design decision was driven by actual usage friction, making it a case study in iterative product development. The codebase is structured for future extension: additional tracking modules can be plugged in without touching the core.

**Tech Stack:** TypeScript, Next.js, React, Prisma, PostgreSQL

**GitHub:** [github.com/srivatsacool/BakaTracker](https://github.com/srivatsacool/BakaTracker)

**Live Demo:** [Play Now](https://bakatracker.buildsrivatsa.qzz.io)

---

## 6. Next Word Prediction Using LSTM

**Tags:** `Python` · `Deep Learning` · `NLP` · `LSTM` · `Flask`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Next-Word-Prediction-Using-LSTM/main/assets/hero.png`

**Short Description:**
An LSTM-based NLP web app that predicts the next word in a sentence using learned language patterns.

**Long Description:**
Language models don't have to be billion-parameter behemoths to be useful — this project proves it. A production-ready web application that predicts the next word a user is likely to type, trained on a curated text corpus using a Long Short-Term Memory (LSTM) neural network. The model learns sequential patterns and contextual dependencies in language, making predictions that feel intuitive rather than random. Packaged as a real Flask web app, users type a sentence fragment and watch predictions materialize in real time. The architecture implements a sliding window tokenization strategy, temperature-controlled sampling for diverse outputs, and a vocabulary layer that handles out-of-vocabulary tokens gracefully. This project explores the foundations of what makes modern autocomplete systems tick — built from scratch, without shortcuts.

**Tech Stack:** Python, TensorFlow/Keras, LSTM, Flask, Jupyter Notebook

**GitHub:** [github.com/srivatsacool/Next-Word-Prediction-Using-LSTM](https://github.com/srivatsacool/Next-Word-Prediction-Using-LSTM)

**Live Demo:** [Play Now](https://srivat-1--handwritten-alphanumeric-recognizer-using-cnn-1hkq8f.streamlit.app/Next_Words_Prediction_Using_LSTM)

---

## 7. Machine Learning Applied — Model Zoo

**Tags:** `Python` · `Machine Learning` · `Scikit-learn` · `Data Science`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Machine-Learning-Applied/main/assets/hero.png`

**Short Description:**
A structured machine learning repository covering multiple classical models, datasets, evaluations, and comparative analyses.

**Long Description:**
A comprehensive, structured collection of supervised and unsupervised machine learning models applied across diverse real-world datasets. Rather than a random notebook dump, this repository is organized as a learning-through-doing archive — each model implementation paired with dataset context, exploratory analysis, and evaluation metrics. Covers the full classical ML spectrum: linear and logistic regression, decision trees, random forests, SVMs, K-Means clustering, PCA, and ensemble methods. The real value is in the comparative analysis across models on the same datasets — understanding not just how each algorithm works, but when to use which, and why accuracy alone is a misleading metric. A reference library that reflects genuine depth of understanding across the ML landscape.

**Tech Stack:** Python, Scikit-learn, Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebook

**GitHub:** [github.com/srivatsacool/Machine-Learning-Applied](https://github.com/srivatsacool/Machine-Learning-Applied)

**Live Demo:** _Not deployed_

---

## 8. Competitive Programming Solutions

**Tags:** `C++` · `Algorithms` · `Data Structures` · `Problem Solving`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Competitive-programming/main/assets/hero.png`

**Short Description:**
A curated archive of competitive programming solutions showcasing algorithmic thinking across major coding platforms.

**Long Description:**
A personal archive of competitive programming solutions across Codeforces, LeetCode, and CodeChef — written in C++. This repository is the behind-the-scenes record of algorithmic thinking: dynamic programming solutions, graph traversals, segment trees, binary search implementations, and combinatorics problems solved under time pressure. Competitive programming is the sport of software engineering — it sharpens the ability to decompose complex problems, recognize patterns, and write efficient code fast. Solutions are organized by topic and difficulty, making it a structured reference rather than a flat list. The progression visible across the archive — from basic sorting problems to advanced graph algorithms — reflects a deliberate, systematic approach to building algorithmic fluency.

**Tech Stack:** C++, STL, Algorithms, Data Structures

**GitHub:** [github.com/srivatsacool/Competitive-programming](https://github.com/srivatsacool/Competitive-programming)

**Live Demo:** _Not deployed_

---

## 9. Pong — Vibe Coded

**Tags:** `JavaScript` · `HTML5 Canvas` · `Game Dev` · `Vibe Coding`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Pong_Vibe_Coded/main/assets/hero.png`

**Short Description:**
A polished Pong remake built through human-AI pair programming to explore vibe coding as a development workflow.

**Long Description:**
A fully playable, polished reimagining of the classic Pong arcade game — built entirely through human-AI pair programming (vibe coding). The project is as much an experiment in AI-assisted development as it is a game: the entire codebase was produced iteratively through natural language prompts, with the human directing design intent and the AI generating implementation. The result is a silky-smooth, physics-accurate Pong clone with responsive AI opponent difficulty scaling, particle effects on ball impact, and a minimal dark-mode aesthetic. What makes this interesting in a portfolio context is the meta-story: demonstrating fluency with AI-augmented development workflows — knowing how to direct, evaluate, and refine AI-generated code — is increasingly a core engineering skill.

**Tech Stack:** JavaScript, HTML5 Canvas, CSS

**GitHub:** [github.com/srivatsacool/Pong_Vibe_Coded](https://github.com/srivatsacool/Pong_Vibe_Coded)

**Live Demo:** _Not deployed_

---

## 10. London Accident Analysis — Tableau

**Tags:** `Tableau` · `Data Visualization` · `Analytics` · `Public Safety`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/London-Accident-Analysis-Using-Tableau/main/assets/hero.png`

**Short Description:**
An interactive Tableau dashboard analyzing London traffic accidents across geography, time, severity, and road conditions.

**Long Description:**
A deep-dive visual analysis of London traffic accident data, built as an interactive Tableau dashboard. This project goes beyond surface-level charts: the analysis is structured to answer specific operational questions — where are accidents concentrated geographically? Which time windows carry the highest risk? What road and weather conditions correlate with severity? The dashboard uses layered filtering, geographic heat maps, time-series trend analysis, and cross-dimensional breakdown views to make the data genuinely navigable. Built for a public safety audience, the visualization prioritizes clarity and insight over aesthetic complexity. It demonstrates the ability to turn raw civic data into actionable intelligence — a critical skill at the intersection of data science and policy.

**Tech Stack:** Tableau, Data Analysis, Public Dataset

**GitHub:** [github.com/srivatsacool/London-Accident-Analysis-Using-Tableau](https://github.com/srivatsacool/London-Accident-Analysis-Using-Tableau)

**Live Demo:** [Play Now](https://public.tableau.com/app/profile/srivatsa.g1779/viz/LondonAccidentAnalysis/Story1)

---

## 11. Mumbai Vendor Demand Forecasting

**Tags:** `Python` · `Machine Learning` · `Streamlit` · `XGBoost` · `Data Science`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Mumbai-Vendor-Demand-Forecasting/main/assets/hero.png`

**Short Description:**
A deployed ML app that forecasts hourly demand for Mumbai street food vendors using operational and environmental features.

**Long Description:**
Predict hourly demand for Mumbai street food vendors using machine learning — and actually deploy it. This end-to-end project chains data preprocessing, feature engineering (weather, time-of-day, lag features, traffic density, competitor proximity), and model training (Random Forest / XGBoost) into a live Streamlit web application iterated across four versions. The problem is real: Mumbai's street vendors face highly variable demand, and this system helps them optimize inventory, reduce food waste, and maximize daily revenue. Each version layer adds capability — v2 adds visualization depth, v3 adds scenario simulation, v4 adds real-time weather via WeatherAPI and multi-language support via `deep_translator`. The result is a production-grade forecasting tool that is genuinely deployable in the field with minimal infrastructure.

**Tech Stack:** Python, Streamlit, Scikit-learn, XGBoost, Pandas, Plotly, WeatherAPI

**GitHub:** [github.com/srivatsacool/Mumbai-Vendor-Demand-Forecasting](https://github.com/srivatsacool/Mumbai-Vendor-Demand-Forecasting)

**Live Demo:** [Streamlit App v4](https://mumbai-vendor-demand-forecasting-v4.streamlit.app/)

---

## 12. Financial Model — LTIMindtree

**Tags:** `Python` · `Excel` · `Finance` · `CAPM` · `WACC` · `Valuation`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Financial-Model-made-by-Srivatsa-Gorti/main/assets/hero.png`

**Short Description:**
An investment-style financial valuation model for LTIMindtree using CAPM, WACC, DCF, FCFF, FCFE, EVA, and MVA.

**Long Description:**
A rigorous, investment-grade financial model built on LTIMindtree's public financials — covering the full spectrum of corporate valuation techniques. Starting from raw financial statements, the model computes Beta via regression analysis, derives Cost of Equity through the Capital Asset Pricing Model (CAPM), and arrives at WACC by factoring in the optimal capital structure. The valuation layer includes FCFF (Free Cash Flow to Firm), FCFE (Free Cash Flow to Equity), EVA (Economic Value Added), and MVA (Market Value Added) — providing multiple lenses on intrinsic value. The Excel framework is structured for transparency and auditability: every assumption is documented, every formula traceable. Accompanied by a detailed analytical report that contextualizes the numbers within LTIMindtree's business trajectory. This project reflects the intersection of quantitative finance and applied data analysis.

**Tech Stack:** Python, Excel, CAPM, WACC, DCF Valuation, Financial Analysis

**GitHub:** [github.com/srivatsacool/Financial-Model-made-by-Srivatsa-Gorti](https://github.com/srivatsacool/Financial-Model-made-by-Srivatsa-Gorti)

**Live Demo:** _Not deployed_

---

## 13. GestureFilter — Real-Time Webcam Filter Engine

**Tags:** `React` · `WebGL` · `MediaPipe` · `TypeScript` · `Computer Vision`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/GestureFilter/main/assets/hero.png`

**Short Description:**
A browser-based webcam filter engine using WebGL shaders and gesture recognition for real-time visual effects at 60 FPS.

**Long Description:**
A high-performance webcam filter engine that runs entirely in the browser at 60 FPS. GestureFilter uses GPU-accelerated WebGL shaders for real-time visual effects — Dither, Glitch, ASCII, Drunk — and Google's MediaPipe for hand gesture detection, all offloaded to a Web Worker so the main thread stays completely free. The modular FilterBase architecture makes adding new shader effects trivial. The Number Detection Mode uses custom joint-tip mapping heuristics to detect hand-signed numbers 1–10 using both one- and two-hand gestures. A Hand Stabilizer module applies frame-persistence algorithms to eliminate tracking jitter. Built with the Anti-Gravity UI philosophy: minimal, zero-waste interface that steps entirely out of the way. This project demonstrates that browser-based AR can be both high-performance and visually stunning — no native app required.

**Tech Stack:** React, TypeScript, WebGL, MediaPipe, Vite, Web Workers

**GitHub:** [github.com/srivatsacool/GestureFilter](https://github.com/srivatsacool/GestureFilter)

**Live Demo:** [GestureFilter](https://gesturefilter.buildsrivatsa.qzz.io)
---

## 14. Airlines ESG Maturity Predictive Analysis

**Tags:** `Python` · `Data Mining` · `Machine Learning` · `ESG` · `Statistical Analysis`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Airlines-ESG-Maturity-Predictive-Analysis/main/assets/hero.png`

**Short Description:**
A supervised learning study predicting ESG maturity across 127 airlines and identifying governance as the key performance driver.

**Long Description:**
A rigorous data mining project analyzing Environmental, Social, and Governance (ESG) maturity across 127 airline companies using supervised learning. The dual-model pipeline — Linear Regression for continuous ESG score prediction (R² = 0.78) and Logistic Regression for binary Leader/Laggard classification (88% accuracy, ROC-AUC = 0.94) — reveals that governance is the strongest ESG driver, and large-cap airlines score significantly higher (p < 0.001). The analysis follows a structured 9-section methodology: data integration from three ESG dimensions, IQR-based outlier removal, median imputation, VIF-based feature selection to eliminate multicollinearity, hypothesis testing via t-test, and full model diagnostics including confusion matrices and calibration curves. Built for both academic rigor and investment screening utility — the classification output can directly inform ESG-weighted portfolio construction.

**Tech Stack:** Python, Scikit-learn, Pandas, Matplotlib, Seaborn, Jupyter Notebook

**GitHub:** [github.com/srivatsacool/Airlines-ESG-Maturity-Predictive-Analysis](https://github.com/srivatsacool/Airlines-ESG-Maturity-Predictive-Analysis)

**Live Demo:** _Not deployed_

---

## 15. UCB ReWear AI — Circular Fashion Platform

**Tags:** `React` · `Three.js` · `Gemini AI` · `PWA` · `Sustainability`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/UCB_case/main/assets/hero.png`

**Short Description:**
A circular fashion platform using Gemini AI and Three.js to redesign garments into sustainable, mood-based 3D concepts.

**Long Description:**
Fashion sustainability meets generative AI. UCB ReWear AI is an emotion-aware circular fashion platform that analyzes user-uploaded garments via Google's Gemini Vision API, generates mood-based sustainable redesign concepts, and lets users customize transformations in a real-time 3D WebGL studio built with Three.js and React Three Fiber. The system maps emotional states (Bold, Cozy, Professional) to actionable styling palettes and upcycling techniques. A sustainability dashboard tracks ecological impact — CO₂ saved, water conserved — making the environmental value of reuse tangible. The architecture features procedural mesh generation for 3D garment visualization, eliminating the need for pre-built 3D models. Runs as a Progressive Web App: installable, offline-capable, cross-platform. It reimagines the wardrobe as a design studio — transform your clothes instead of discarding them.

**Tech Stack:** React 18, Vite, Three.js, React Three Fiber, Gemini API, Tailwind CSS v4, Framer Motion, PWA

**GitHub:** [github.com/srivatsacool/UCB_case](https://github.com/srivatsacool/UCB_case)

**Live Demo:** _Not deployed_

---

## 16. Solar Energy Case Study — IIT Mandi

**Tags:** `HTML` · `CSS` · `Research` · `Energy Policy`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Solar---IIT-Mandi-Case-Comp-/main/assets/hero.png`

**Short Description:**
A comprehensive solar energy strategy case study submitted for the IIT Mandi Case Competition. Examines grid integration challenges, LCOE projections, rooftop vs. utility-scale tradeoffs, and state-level regulatory landscapes. Delivered as an interactive HTML presentation.

**Tech Stack:** HTML, CSS, Data Analysis, Research

**GitHub:** [github.com/srivatsacool/Solar---IIT-Mandi-Case-Comp-](https://github.com/srivatsacool/Solar---IIT-Mandi-Case-Comp-)

**Live Demo:** _Not deployed_

---

## 17. Animal Breed Classification

**Tags:** `Python` · `Deep Learning` · `Computer Vision` · `SqueezeNet` · `YOLOv11`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Animal-Breed-Classification/main/assets/hero.png`

**Short Description:**
A multi-model CV pipeline for cattle and buffalo breed identification. SqueezeNet classifies breeds, YOLOv11 estimates pose via body keypoints, and ArUco markers calibrate pixel-to-centimeter dimensions for real-world size measurement — all in a single system.

**Tech Stack:** Python, PyTorch, SqueezeNet, YOLOv11, OpenCV, ArUco Markers

**GitHub:** [github.com/srivatsacool/Animal-Breed-Classification](https://github.com/srivatsacool/Animal-Breed-Classification)

**Live Demo:** _Not deployed_

---

## 18. IPL Analysis — Tableau

**Tags:** `Tableau` · `Data Visualization` · `Sports Analytics`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/IPL-Analysis-Using-Tableau/main/assets/hero.png`

**Short Description:**
Interactive Tableau dashboard analyzing IPL cricket data across seasons. Covers player performance trends, team win rates, toss impact, venue analysis, and match outcome patterns — structured for sports analysts and cricket enthusiasts alike.

**Tech Stack:** Tableau, Data Analysis, Sports Dataset

**GitHub:** [github.com/srivatsacool/IPL-Analysis-Using-Tableau](https://github.com/srivatsacool/IPL-Analysis-Using-Tableau)

**Live Demo:** _Not deployed_

---

## 19. RBA1 Villa Party

**Tags:** `TypeScript` · `Next.js` · `Event Planning` · `Web App`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/rba1_villa_party/main/assets/hero.png`

**Short Description:**
A purpose-built event coordination app for organizing a villa party for the RBA1 batch at IIT Madras. Handles RSVP registration, event detail management, and real-time updates — built with TypeScript and Next.js in a mobile-first, clean interface.

**Tech Stack:** TypeScript, Next.js, React

**GitHub:** [github.com/srivatsacool/rba1_villa_party](https://github.com/srivatsacool/rba1_villa_party)

**Live Demo:** _Not deployed_

---

## 20. Object Size Estimation with OpenCV & ArUco Markers

**Tags:** `Python` · `Computer Vision` · `OpenCV` · `Measurement`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Size-Estimation-with-CV2-and-Aruco/main/assets/hero.png`

**Short Description:**
Measures physical objects without a ruler — using only a camera and a printed ArUco marker. The known marker size provides a pixel-to-centimeter conversion ratio, applied to compute bounding dimensions of any detected object in the frame. Useful for industrial QC, logistics, and AR.

**Tech Stack:** Python, OpenCV, ArUco Markers

**GitHub:** [github.com/srivatsacool/Size-Estimation-with-CV2-and-Aruco](https://github.com/srivatsacool/Size-Estimation-with-CV2-and-Aruco)

**Live Demo:** _Not deployed_

---

## 21. Handwritten Numeric Recognizer (CNN)

**Tags:** `Python` · `CNN` · `Deep Learning` · `Flask` · `Interactive`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Handwritten-Numeric-Recognizer-using-CNN/main/assets/hero.png`

**Short Description:**
A focused digit recognition web app where users draw on an HTML5 canvas and a CNN trained on MNIST returns a prediction with sound feedback. The numeric-only scope enables high accuracy and low latency — the prototype that led to the full AlphaNumeric version.

**Tech Stack:** Python, TensorFlow/Keras, CNN, MNIST, Flask, HTML5 Canvas

**GitHub:** [github.com/srivatsacool/Handwritten-Numeric-Recognizer-using-CNN](https://github.com/srivatsacool/Handwritten-Numeric-Recognizer-using-CNN)

**Live Demo:** _Not deployed_

---

## 22. Combined YOLOv7 Object Detection

**Tags:** `Python` · `YOLOv7` · `Object Detection` · `Real-Time` · `Computer Vision`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/Combined_YOLOv7/main/assets/hero.png`

**Short Description:**
A unified YOLOv7 pipeline fusing multiple detection tasks into a single real-time inference architecture. Reduces computational overhead vs. running separate models, enabling richer multi-class scene understanding from one camera feed.

**Tech Stack:** Python, YOLOv7, PyTorch, OpenCV

**GitHub:** [github.com/srivatsacool/Combined_YOLOv7](https://github.com/srivatsacool/Combined_YOLOv7)

**Live Demo:** _Not deployed_

---

## 23. HandDrawn AlphaDigit Recognizer (Early Prototype)

**Tags:** `Python` · `CNN` · `Computer Vision` · `Prototype`

**Hero Image:** `https://raw.githubusercontent.com/srivatsacool/HandDrawn-AplhaDigit-Recognizer/main/assets/hero.png`

**Short Description:**
The earliest prototype of the handwritten character recognition system — raw experimentation with CNN architecture before the polished web app versions. Included to show the iterative journey from proof-of-concept to production.

**Tech Stack:** Python, TensorFlow/Keras, CNN

**GitHub:** [github.com/srivatsacool/HandDrawn-AplhaDigit-Recognizer](https://github.com/srivatsacool/HandDrawn-AplhaDigit-Recognizer)

**Live Demo:** _Not deployed_

---

*Last updated: May 2026 · [GitHub Profile](https://github.com/srivatsacool) · [Portfolio](https://bakasrivatsa.netlify.app/)*