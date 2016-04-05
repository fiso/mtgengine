"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptivePitmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Disruptive Pitmage", "Onslaught", "ONS");
  }
}

module.exports = DisruptivePitmage;
