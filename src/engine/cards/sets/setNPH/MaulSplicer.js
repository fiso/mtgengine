"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaulSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Maul Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = MaulSplicer;
