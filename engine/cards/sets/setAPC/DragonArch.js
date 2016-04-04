"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonArch extends Card {
  constructor(game) {
    super(game, "Dragon Arch", "Apocalypse", "APC");
  }
}

module.exports = DragonArch;
