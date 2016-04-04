"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Asphyxiate extends Card {
  constructor(game) {
    super(game, "Asphyxiate", "Born of the Gods", "BNG");
  }
}

module.exports = Asphyxiate;
