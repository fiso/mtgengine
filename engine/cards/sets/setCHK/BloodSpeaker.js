"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodSpeaker extends Card {
  constructor(game) {
    super(game, "Blood Speaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodSpeaker;
