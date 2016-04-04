"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldMedic extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlefield Medic", "Onslaught", "ONS");
  }
}

module.exports = BattlefieldMedic;
