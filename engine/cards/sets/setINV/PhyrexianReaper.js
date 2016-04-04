"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianReaper extends Card {
  constructor(game) {
    super(game, "Phyrexian Reaper", "Invasion", "INV");
  }
}

module.exports = PhyrexianReaper;
