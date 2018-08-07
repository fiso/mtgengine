"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoringCeratops extends UnimplementedCard {
  constructor (game) {
    super(game, "Goring Ceratops", "Ixalan", "XLN");
  }
}

module.exports = GoringCeratops;
