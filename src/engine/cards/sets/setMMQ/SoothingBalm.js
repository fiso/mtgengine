"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoothingBalm extends UnimplementedCard {
  constructor (game) {
    super(game, "Soothing Balm", "Mercadian Masques", "MMQ");
  }
}

module.exports = SoothingBalm;
