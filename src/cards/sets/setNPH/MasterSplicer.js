"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Master Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = MasterSplicer;
