"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArrowStorm extends Card {
  constructor(game) {
    super(game, "Arrow Storm", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArrowStorm;
