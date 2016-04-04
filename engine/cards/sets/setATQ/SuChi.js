"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuChi extends Card {
  constructor(game) {
    super(game, "Su-Chi", "Antiquities", "ATQ");
  }
}

module.exports = SuChi;
