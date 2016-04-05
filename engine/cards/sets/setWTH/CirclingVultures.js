"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CirclingVultures extends UnimplementedCard {
  constructor(game) {
    super(game, "Circling Vultures", "Weatherlight", "WTH");
  }
}

module.exports = CirclingVultures;
