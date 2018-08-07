"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuthlessInvasion extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruthless Invasion", "New Phyrexia", "NPH");
  }
}

module.exports = RuthlessInvasion;
