"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofLight extends Card {
  constructor(game) {
    super(game, "Angel of Light", "Masters Edition II", "ME2");
  }
}

module.exports = AngelofLight;
