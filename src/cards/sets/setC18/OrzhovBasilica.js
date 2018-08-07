"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovBasilica extends UnimplementedCard {
  constructor (game) {
    super(game, "Orzhov Basilica", "Commander 2018", "C18");
  }
}

module.exports = OrzhovBasilica;
