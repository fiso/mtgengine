"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TempleofMalice extends Card {
  constructor(game) {
    super(game, "Temple of Malice", "Born of the Gods", "BNG");
  }
}

module.exports = TempleofMalice;
