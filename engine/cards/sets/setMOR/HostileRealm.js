"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HostileRealm extends Card {
  constructor(game) {
    super(game, "Hostile Realm", "Morningtide", "MOR");
  }
}

module.exports = HostileRealm;
