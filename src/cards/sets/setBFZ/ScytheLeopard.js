"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScytheLeopard extends UnimplementedCard {
  constructor (game) {
    super(game, "Scythe Leopard", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ScytheLeopard;
