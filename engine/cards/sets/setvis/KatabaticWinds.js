"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KatabaticWinds extends Card {
  constructor(game) {
    super(game, "Katabatic Winds", "Visions", "VIS");
  }
}

module.exports = KatabaticWinds;
