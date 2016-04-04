"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SetAdrift extends Card {
  constructor(game) {
    super(game, "Set Adrift", "Khans of Tarkir", "KTK");
  }
}

module.exports = SetAdrift;
