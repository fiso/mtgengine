"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GetaLife extends UnimplementedCard {
  constructor(game) {
    super(game, "Get a Life", "Unglued", "UGL");
  }
}

module.exports = GetaLife;
