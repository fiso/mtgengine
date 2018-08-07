"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantsMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrant's Machine", "Battlebond", "BBD");
  }
}

module.exports = TyrantsMachine;
