"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OtherworldAtlas extends Card {
  constructor(game) {
    super(game, "Otherworld Atlas", "Avacyn Restored", "AVR");
  }
}

module.exports = OtherworldAtlas;
