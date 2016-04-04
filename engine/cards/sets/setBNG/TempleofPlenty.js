"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleofPlenty extends Card {
  constructor(game) {
    super(game, "Temple of Plenty", "Born of the Gods", "BNG");
  }
}

module.exports = TempleofPlenty;
