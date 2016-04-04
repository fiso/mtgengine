"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fertilid extends Card {
  constructor(game) {
    super(game, "Fertilid", "Archenemy", "ARC");
  }
}

module.exports = Fertilid;
