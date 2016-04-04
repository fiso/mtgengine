"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SidisisPet extends Card {
  constructor(game) {
    super(game, "Sidisi's Pet", "Khans of Tarkir", "KTK");
  }
}

module.exports = SidisisPet;
