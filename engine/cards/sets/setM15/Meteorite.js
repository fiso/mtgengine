"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Meteorite extends Card {
  constructor(game) {
    super(game, "Meteorite", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Meteorite;
