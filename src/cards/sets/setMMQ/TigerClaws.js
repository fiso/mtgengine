"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TigerClaws extends UnimplementedCard {
  constructor (game) {
    super(game, "Tiger Claws", "Mercadian Masques", "MMQ");
  }
}

module.exports = TigerClaws;
