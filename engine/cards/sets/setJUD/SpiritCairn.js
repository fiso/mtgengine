"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritCairn extends Card {
  constructor(game) {
    super(game, "Spirit Cairn", "Judgment", "JUD");
  }
}

module.exports = SpiritCairn;
