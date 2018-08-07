"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherVoid extends UnimplementedCard {
  constructor (game) {
    super(game, "Nether Void", "Masters Edition III", "ME3");
  }
}

module.exports = NetherVoid;
