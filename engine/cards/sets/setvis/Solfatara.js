"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Solfatara extends Card {
  constructor(game) {
    super(game, "Solfatara", "Visions", "VIS");
  }
}

module.exports = Solfatara;
