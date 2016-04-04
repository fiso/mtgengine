"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CratersClaws extends Card {
  constructor(game) {
    super(game, "Crater's Claws", "Khans of Tarkir", "KTK");
  }
}

module.exports = CratersClaws;
