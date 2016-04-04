"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormcallerofKeranos extends Card {
  constructor(game) {
    super(game, "Stormcaller of Keranos", "Born of the Gods", "BNG");
  }
}

module.exports = StormcallerofKeranos;
