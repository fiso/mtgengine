"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoollyLoxodon extends UnimplementedCard {
  constructor(game) {
    super(game, "Woolly Loxodon", "Khans of Tarkir", "KTK");
  }
}

module.exports = WoollyLoxodon;
