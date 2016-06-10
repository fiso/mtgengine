"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pegasustokencard extends UnimplementedCard {
  constructor (game) {
    super(game, "Pegasus token card", "Unglued", "UGL");
  }
}

module.exports = Pegasustokencard;
