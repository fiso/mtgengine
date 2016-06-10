"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Xenograft extends UnimplementedCard {
  constructor (game) {
    super(game, "Xenograft", "New Phyrexia", "NPH");
  }
}

module.exports = Xenograft;
