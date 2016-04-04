"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulFeast extends Card {
  constructor(game) {
    super(game, "Soul Feast", "Eighth Edition", "8ED");
  }
}

module.exports = SoulFeast;
