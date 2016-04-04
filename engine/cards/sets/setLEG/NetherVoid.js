"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherVoid extends UnimplementedCard {
  constructor(game) {
    super(game, "Nether Void", "Legends", "LEG");
  }
}

module.exports = NetherVoid;
