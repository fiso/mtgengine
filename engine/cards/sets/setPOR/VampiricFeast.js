"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VampiricFeast extends Card {
  constructor(game) {
    super(game, "Vampiric Feast", "Portal", "POR");
  }
}

module.exports = VampiricFeast;
