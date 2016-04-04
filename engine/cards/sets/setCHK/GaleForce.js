"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaleForce extends Card {
  constructor(game) {
    super(game, "Gale Force", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GaleForce;
