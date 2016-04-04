"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Exorcist extends Card {
  constructor(game) {
    super(game, "Exorcist", "Masters Edition III", "ME3");
  }
}

module.exports = Exorcist;
