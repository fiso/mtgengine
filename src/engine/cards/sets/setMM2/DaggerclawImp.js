"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaggerclawImp extends UnimplementedCard {
  constructor (game) {
    super(game, "Daggerclaw Imp", "Modern Masters 2015", "MM2");
  }
}

module.exports = DaggerclawImp;
