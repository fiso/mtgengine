"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CranialPlating extends Card {
  constructor(game) {
    super(game, "Cranial Plating", "Fifth Dawn", "5DN");
  }
}

module.exports = CranialPlating;
