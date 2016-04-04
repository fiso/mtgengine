"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LunarAvenger extends Card {
  constructor(game) {
    super(game, "Lunar Avenger", "Fifth Dawn", "5DN");
  }
}

module.exports = LunarAvenger;
