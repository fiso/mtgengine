"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeatherseedElf extends UnimplementedCard {
  constructor (game) {
    super(game, "Weatherseed Elf", "Urza's Legacy", "ULG");
  }
}

module.exports = WeatherseedElf;
