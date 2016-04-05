"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tarmogoyf extends UnimplementedCard {
  constructor(game) {
    super(game, "Tarmogoyf", "Future Sight", "FUT");
  }
}

module.exports = Tarmogoyf;
