"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FodderLaunch extends UnimplementedCard {
  constructor(game) {
    super(game, "Fodder Launch", "Lorwyn", "LRW");
  }
}

module.exports = FodderLaunch;
