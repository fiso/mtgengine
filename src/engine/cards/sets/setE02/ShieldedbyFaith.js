"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldedbyFaith extends UnimplementedCard {
  constructor (game) {
    super(game, "Shielded by Faith", "Explorers of Ixalan", "E02");
  }
}

module.exports = ShieldedbyFaith;
