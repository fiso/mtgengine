"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeeperofKookus extends UnimplementedCard {
  constructor(game) {
    super(game, "Keeper of Kookus", "Visions", "VIS");
  }
}

module.exports = KeeperofKookus;
