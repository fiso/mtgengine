"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gurzigost extends UnimplementedCard {
  constructor(game) {
    super(game, "Gurzigost", "Torment", "TOR");
  }
}

module.exports = Gurzigost;
