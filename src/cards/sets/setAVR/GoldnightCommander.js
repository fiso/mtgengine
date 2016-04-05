"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoldnightCommander extends UnimplementedCard {
  constructor(game) {
    super(game, "Goldnight Commander", "Avacyn Restored", "AVR");
  }
}

module.exports = GoldnightCommander;
