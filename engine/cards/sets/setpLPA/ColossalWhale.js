"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ColossalWhale extends Card {
  constructor(game) {
    super(game, "Colossal Whale", "Launch Parties", "pLPA");
  }
}

module.exports = ColossalWhale;
