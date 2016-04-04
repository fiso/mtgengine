"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AntQueen extends Card {
  constructor(game) {
    super(game, "Ant Queen", "Launch Parties", "pLPA");
  }
}

module.exports = AntQueen;
