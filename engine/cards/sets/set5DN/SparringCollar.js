"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparringCollar extends Card {
  constructor(game) {
    super(game, "Sparring Collar", "Fifth Dawn", "5DN");
  }
}

module.exports = SparringCollar;
