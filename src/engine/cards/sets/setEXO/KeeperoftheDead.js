"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Keeper of the Dead", "Exodus", "EXO");
  }
}

module.exports = KeeperoftheDead;
