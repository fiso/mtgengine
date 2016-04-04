"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dreadwing extends UnimplementedCard {
  constructor(game) {
    super(game, "Dreadwing", "Conflux", "CON");
  }
}

module.exports = Dreadwing;
