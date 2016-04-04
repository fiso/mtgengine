"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruesomeSlaughter extends Card {
  constructor(game) {
    super(game, "Gruesome Slaughter", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GruesomeSlaughter;
