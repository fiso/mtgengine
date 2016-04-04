"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronLance extends UnimplementedCard {
  constructor(game) {
    super(game, "Iron Lance", "Mercadian Masques", "MMQ");
  }
}

module.exports = IronLance;
