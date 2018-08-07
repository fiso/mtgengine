"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RegisaurAlpha extends UnimplementedCard {
  constructor (game) {
    super(game, "Regisaur Alpha", "Ixalan", "XLN");
  }
}

module.exports = RegisaurAlpha;
