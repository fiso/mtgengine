"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenHollow extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunken Hollow", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SunkenHollow;
