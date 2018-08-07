"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConstrictingTendrils extends UnimplementedCard {
  constructor (game) {
    super(game, "Constricting Tendrils", "Conflux", "CON");
  }
}

module.exports = ConstrictingTendrils;
