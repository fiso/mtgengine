"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ghoulflesh extends Card {
  constructor(game) {
    super(game, "Ghoulflesh", "Avacyn Restored", "AVR");
  }
}

module.exports = Ghoulflesh;
