"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirebrandRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Firebrand Ranger", "Invasion", "INV");
  }
}

module.exports = FirebrandRanger;
