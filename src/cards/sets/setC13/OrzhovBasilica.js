"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovBasilica extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhov Basilica", "Commander 2013 Edition", "C13");
  }
}

module.exports = OrzhovBasilica;
