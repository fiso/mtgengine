"use strict";
const Constants = require ("../../../Constants");
const StartledAwakePersistentNightmareBase = require("../setSOI/StartledAwakePersistentNightmare");

class StartledAwakePersistentNightmare extends StartledAwakePersistentNightmareBase {
  constructor (game) {
    super(game, "Startled Awake // Persistent Nightmare", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = StartledAwakePersistentNightmare;
