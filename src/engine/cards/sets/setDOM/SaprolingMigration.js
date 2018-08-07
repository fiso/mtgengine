"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaprolingMigration extends UnimplementedCard {
  constructor (game) {
    super(game, "Saproling Migration", "Dominaria", "DOM");
  }
}

module.exports = SaprolingMigration;
