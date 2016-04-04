"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderedMigration extends UnimplementedCard {
  constructor(game) {
    super(game, "Ordered Migration", "Invasion", "INV");
  }
}

module.exports = OrderedMigration;
