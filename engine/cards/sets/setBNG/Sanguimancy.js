"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sanguimancy extends Card {
  constructor(game) {
    super(game, "Sanguimancy", "Born of the Gods", "BNG");
  }
}

module.exports = Sanguimancy;
