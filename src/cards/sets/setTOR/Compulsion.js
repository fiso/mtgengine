"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Compulsion extends UnimplementedCard {
  constructor(game) {
    super(game, "Compulsion", "Torment", "TOR");
  }
}

module.exports = Compulsion;
