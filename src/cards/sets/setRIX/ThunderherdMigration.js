"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderherdMigration extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunderherd Migration", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ThunderherdMigration;
