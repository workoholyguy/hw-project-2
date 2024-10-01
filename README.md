# Web Development Project 2 - **JavaScript Mastery Quiz**

Submitted by: **[Omar Madjitov]**

This web app: **An interactive quiz to test your knowledge of JavaScript concepts. The app presents a set of flashcards, each containing a question and an answer. Clicking on a card flips it horizontally to reveal the answer. Users can navigate through different questions using the "Next Question" button.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] **Different colors for each card**

The following **additional** features are implemented:

- [] **A card-flipping animation is added, where the card flips horizontally when clicked to reveal the answer**
- [x] **A "Reveal Answer" button is dynamically hidden once the answer is revealed**

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/EfoUKMh.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ScreenToGif

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges encountered while building the app:

- Setting up the 3D perspective for the card flip and ensuring that both sides (front and back) are properly hidden and revealed as needed.
- Managing the dynamic state transitions, such as hiding the "Reveal Answer" button and flipping back when switching to the next question.

## License

    Copyright 2024 [Omar Madjitov]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
