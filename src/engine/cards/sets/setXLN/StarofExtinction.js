"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarofExtinction extends UnimplementedCard {
  constructor (game) {
    super(game, "Star of Extinction", "Ixalan", "XLN");
  }
}

module.exports = StarofExtinction;
