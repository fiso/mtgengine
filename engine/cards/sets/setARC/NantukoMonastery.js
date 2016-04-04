"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NantukoMonastery extends Card {
  constructor(game) {
    super(game, "Nantuko Monastery", "Archenemy", "ARC");
  }
}

module.exports = NantukoMonastery;
