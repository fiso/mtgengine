"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiAscendancy extends Card {
  constructor(game) {
    super(game, "Jeskai Ascendancy", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiAscendancy;
