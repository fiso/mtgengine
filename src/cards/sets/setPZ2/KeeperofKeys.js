"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperofKeys extends UnimplementedCard {
  constructor (game) {
    super(game, "Keeper of Keys", "You Make the Cube", "PZ2");
  }
}

module.exports = KeeperofKeys;
