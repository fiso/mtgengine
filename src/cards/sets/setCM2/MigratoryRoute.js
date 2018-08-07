"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MigratoryRoute extends UnimplementedCard {
  constructor (game) {
    super(game, "Migratory Route", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MigratoryRoute;
