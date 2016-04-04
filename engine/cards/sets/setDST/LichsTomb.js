"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LichsTomb extends Card {
  constructor(game) {
    super(game, "Lich's Tomb", "Darksteel", "DST");
  }
}

module.exports = LichsTomb;
