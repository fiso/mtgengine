"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeatherseedElf extends Card {
  constructor(game) {
    super(game, "Weatherseed Elf", "Urza's Legacy", "ULG");
  }
}

module.exports = WeatherseedElf;
