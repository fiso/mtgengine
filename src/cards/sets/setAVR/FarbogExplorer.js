"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarbogExplorer extends UnimplementedCard {
  constructor(game) {
    super(game, "Farbog Explorer", "Avacyn Restored", "AVR");
  }
}

module.exports = FarbogExplorer;
