"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RazorGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Razor Golem", "Darksteel", "DST");
  }
}

module.exports = RazorGolem;
