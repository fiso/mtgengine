"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhylacteryLich extends Card {
  constructor(game) {
    super(game, "Phylactery Lich", "Magic 2011", "M11");
  }
}

module.exports = PhylacteryLich;
