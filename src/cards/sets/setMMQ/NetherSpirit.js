"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Nether Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = NetherSpirit;
