"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutHarpist extends UnimplementedCard {
  constructor(game) {
    super(game, "Devout Harpist", "Urza's Legacy", "ULG");
  }
}

module.exports = DevoutHarpist;
