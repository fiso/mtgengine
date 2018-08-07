"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CennsEnlistment extends UnimplementedCard {
  constructor (game) {
    super(game, "Cenn's Enlistment", "Modern Masters", "MMA");
  }
}

module.exports = CennsEnlistment;
