"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StartledAwake extends Card {
  constructor(game) {
    super(game, "Startled Awake", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StartledAwake;
