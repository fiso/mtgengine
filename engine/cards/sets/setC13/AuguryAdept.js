"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuguryAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Augury Adept", "Commander 2013 Edition", "C13");
  }
}

module.exports = AuguryAdept;
