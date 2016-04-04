"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleofSilence extends Card {
  constructor(game) {
    super(game, "Temple of Silence", "Theros", "THS");
  }
}

module.exports = TempleofSilence;
