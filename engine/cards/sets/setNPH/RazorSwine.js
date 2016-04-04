"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorSwine extends UnimplementedCard {
  constructor(game) {
    super(game, "Razor Swine", "New Phyrexia", "NPH");
  }
}

module.exports = RazorSwine;
