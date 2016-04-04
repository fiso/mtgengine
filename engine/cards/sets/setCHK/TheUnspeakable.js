"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheUnspeakable extends Card {
  constructor(game) {
    super(game, "The Unspeakable", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TheUnspeakable;
