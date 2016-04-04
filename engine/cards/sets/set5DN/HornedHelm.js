"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HornedHelm extends Card {
  constructor(game) {
    super(game, "Horned Helm", "Fifth Dawn", "5DN");
  }
}

module.exports = HornedHelm;
