"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Splicer", "Modern Masters 2017", "MM3");
  }
}

module.exports = MasterSplicer;
