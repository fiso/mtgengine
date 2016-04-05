"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PacksDisdain extends UnimplementedCard {
  constructor(game) {
    super(game, "Pack's Disdain", "Morningtide", "MOR");
  }
}

module.exports = PacksDisdain;
