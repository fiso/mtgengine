"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EqualTreatment extends UnimplementedCard {
  constructor (game) {
    super(game, "Equal Treatment", "Torment", "TOR");
  }
}

module.exports = EqualTreatment;
