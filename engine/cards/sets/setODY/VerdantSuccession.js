"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VerdantSuccession extends UnimplementedCard {
  constructor(game) {
    super(game, "Verdant Succession", "Odyssey", "ODY");
  }
}

module.exports = VerdantSuccession;
