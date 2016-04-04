"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimHaruspex extends Card {
  constructor(game) {
    super(game, "Grim Haruspex", "Khans of Tarkir", "KTK");
  }
}

module.exports = GrimHaruspex;
