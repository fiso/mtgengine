"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KikusShadow extends UnimplementedCard {
  constructor(game) {
    super(game, "Kiku's Shadow", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KikusShadow;
