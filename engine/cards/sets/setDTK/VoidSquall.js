"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoidSquall extends Card {
  constructor(game) {
    super(game, "Void Squall", "Dragons of Tarkir", "DTK");
  }
}

module.exports = VoidSquall;
