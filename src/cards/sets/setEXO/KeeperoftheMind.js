"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperoftheMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Keeper of the Mind", "Exodus", "EXO");
  }
}

module.exports = KeeperoftheMind;
