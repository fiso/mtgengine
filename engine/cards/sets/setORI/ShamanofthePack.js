"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShamanofthePack extends Card {
  constructor(game) {
    super(game, "Shaman of the Pack", "Magic Origins", "ORI");
  }
}

module.exports = ShamanofthePack;
