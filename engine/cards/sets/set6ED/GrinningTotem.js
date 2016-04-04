"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningTotem extends UnimplementedCard {
  constructor(game) {
    super(game, "Grinning Totem", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GrinningTotem;
