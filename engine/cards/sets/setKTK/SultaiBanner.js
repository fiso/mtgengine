"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SultaiBanner extends Card {
  constructor(game) {
    super(game, "Sultai Banner", "Khans of Tarkir", "KTK");
  }
}

module.exports = SultaiBanner;
