"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireDragon extends Card {
  constructor(game) {
    super(game, "Fire Dragon", "Masters Edition II", "ME2");
  }
}

module.exports = FireDragon;
