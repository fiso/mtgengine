"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reclamation extends Card {
  constructor(game) {
    super(game, "Reclamation", "Ice Age", "ICE");
  }
}

module.exports = Reclamation;
