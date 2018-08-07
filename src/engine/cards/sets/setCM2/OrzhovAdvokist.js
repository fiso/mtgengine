"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovAdvokist extends UnimplementedCard {
  constructor (game) {
    super(game, "Orzhov Advokist", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = OrzhovAdvokist;
