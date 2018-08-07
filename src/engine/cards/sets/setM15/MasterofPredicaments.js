"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofPredicaments extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Predicaments", "Magic 2015", "M15");
  }
}

module.exports = MasterofPredicaments;
