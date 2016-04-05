"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentSoldier extends UnimplementedCard {
  constructor(game) {
    super(game, "Ardent Soldier", "Invasion", "INV");
  }
}

module.exports = ArdentSoldier;
