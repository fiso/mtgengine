"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiredGiant extends Card {
  constructor(game) {
    super(game, "Hired Giant", "Mercadian Masques", "MMQ");
  }
}

module.exports = HiredGiant;
