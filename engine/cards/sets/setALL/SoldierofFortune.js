"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoldierofFortune extends Card {
  constructor(game) {
    super(game, "Soldier of Fortune", "Alliances", "ALL");
  }
}

module.exports = SoldierofFortune;
