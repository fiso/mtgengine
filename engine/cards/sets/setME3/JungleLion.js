"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JungleLion extends Card {
  constructor(game) {
    super(game, "Jungle Lion", "Masters Edition III", "ME3");
  }
}

module.exports = JungleLion;
