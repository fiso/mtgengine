"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HelmofKaldra extends Card {
  constructor(game) {
    super(game, "Helm of Kaldra", "Fifth Dawn", "5DN");
  }
}

module.exports = HelmofKaldra;
