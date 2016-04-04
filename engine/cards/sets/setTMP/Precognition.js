"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Precognition extends Card {
  constructor(game) {
    super(game, "Precognition", "Tempest", "TMP");
  }
}

module.exports = Precognition;
