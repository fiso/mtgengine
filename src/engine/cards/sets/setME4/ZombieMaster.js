"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Master", "Masters Edition IV", "ME4");
  }
}

module.exports = ZombieMaster;
