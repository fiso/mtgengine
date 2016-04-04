"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CinderStorm extends Card {
  constructor(game) {
    super(game, "Cinder Storm", "Masters Edition III", "ME3");
  }
}

module.exports = CinderStorm;
