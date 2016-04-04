"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MortalsArdor extends Card {
  constructor(game) {
    super(game, "Mortal's Ardor", "Born of the Gods", "BNG");
  }
}

module.exports = MortalsArdor;
