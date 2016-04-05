"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandardBearer extends UnimplementedCard {
  constructor(game) {
    super(game, "Standard Bearer", "Apocalypse", "APC");
  }
}

module.exports = StandardBearer;
