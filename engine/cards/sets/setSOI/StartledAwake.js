"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StartledAwake extends UnimplementedCard {
  constructor(game) {
    super(game, "Startled Awake", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StartledAwake;
