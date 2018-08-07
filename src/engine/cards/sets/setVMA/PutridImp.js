"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PutridImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Putrid Imp", "Vintage Masters", "VMA");
  }
}

module.exports = PutridImp;
