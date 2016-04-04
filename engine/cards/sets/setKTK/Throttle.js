"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Throttle extends Card {
  constructor(game) {
    super(game, "Throttle", "Khans of Tarkir", "KTK");
  }
}

module.exports = Throttle;
