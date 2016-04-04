"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Artillerize extends Card {
  constructor(game) {
    super(game, "Artillerize", "New Phyrexia", "NPH");
  }
}

module.exports = Artillerize;
