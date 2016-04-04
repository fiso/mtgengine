"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranBrawlers extends Card {
  constructor(game) {
    super(game, "Veteran Brawlers", "Prophecy", "PCY");
  }
}

module.exports = VeteranBrawlers;
