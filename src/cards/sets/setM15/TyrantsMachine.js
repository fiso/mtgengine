"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TyrantsMachine extends UnimplementedCard {
  constructor (game) {
    super(game, "Tyrant's Machine", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TyrantsMachine;
