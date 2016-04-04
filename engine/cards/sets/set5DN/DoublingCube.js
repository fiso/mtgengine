"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoublingCube extends Card {
  constructor(game) {
    super(game, "Doubling Cube", "Fifth Dawn", "5DN");
  }
}

module.exports = DoublingCube;
