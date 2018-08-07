"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenalishMarshal extends UnimplementedCard {
  constructor (game) {
    super(game, "Benalish Marshal", "Dominaria", "DOM");
  }
}

module.exports = BenalishMarshal;
