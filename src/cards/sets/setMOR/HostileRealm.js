"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HostileRealm extends UnimplementedCard {
  constructor (game) {
    super(game, "Hostile Realm", "Morningtide", "MOR");
  }
}

module.exports = HostileRealm;
