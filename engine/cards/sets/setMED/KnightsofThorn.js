"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightsofThorn extends Card {
  constructor(game) {
    super(game, "Knights of Thorn", "Masters Edition", "MED");
  }
}

module.exports = KnightsofThorn;
