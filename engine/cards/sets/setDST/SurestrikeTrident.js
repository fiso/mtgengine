"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurestrikeTrident extends Card {
  constructor(game) {
    super(game, "Surestrike Trident", "Darksteel", "DST");
  }
}

module.exports = SurestrikeTrident;
