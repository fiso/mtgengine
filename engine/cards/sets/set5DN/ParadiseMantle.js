"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParadiseMantle extends Card {
  constructor(game) {
    super(game, "Paradise Mantle", "Fifth Dawn", "5DN");
  }
}

module.exports = ParadiseMantle;
