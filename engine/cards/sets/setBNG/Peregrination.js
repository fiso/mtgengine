"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Peregrination extends Card {
  constructor(game) {
    super(game, "Peregrination", "Born of the Gods", "BNG");
  }
}

module.exports = Peregrination;
