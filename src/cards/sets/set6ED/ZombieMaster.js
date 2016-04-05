"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieMaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Zombie Master", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ZombieMaster;
