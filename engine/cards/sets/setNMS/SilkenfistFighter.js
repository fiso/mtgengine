"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilkenfistFighter extends Card {
  constructor(game) {
    super(game, "Silkenfist Fighter", "Nemesis", "NMS");
  }
}

module.exports = SilkenfistFighter;
