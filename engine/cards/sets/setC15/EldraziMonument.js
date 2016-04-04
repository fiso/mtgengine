"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziMonument extends UnimplementedCard {
  constructor(game) {
    super(game, "Eldrazi Monument", "Commander 2015", "C15");
  }
}

module.exports = EldraziMonument;
