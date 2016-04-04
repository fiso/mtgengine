"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbzanFalconer extends Card {
  constructor(game) {
    super(game, "Abzan Falconer", "Khans of Tarkir", "KTK");
  }
}

module.exports = AbzanFalconer;
