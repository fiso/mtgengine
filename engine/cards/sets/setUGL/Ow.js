"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ow extends UnimplementedCard {
  constructor(game) {
    super(game, "Ow", "Unglued", "UGL");
  }
}

module.exports = Ow;
