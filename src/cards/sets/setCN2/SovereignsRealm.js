"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SovereignsRealm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sovereign's Realm", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SovereignsRealm;
