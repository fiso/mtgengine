"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NahiritheLithomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Nahiri, the Lithomancer", "Legendary Cube", "PZ1");
  }
}

module.exports = NahiritheLithomancer;
