"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KagemarosClutch extends Card {
  constructor(game) {
    super(game, "Kagemaro's Clutch", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KagemarosClutch;
