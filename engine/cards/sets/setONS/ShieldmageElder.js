"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldmageElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Shieldmage Elder", "Onslaught", "ONS");
  }
}

module.exports = ShieldmageElder;
