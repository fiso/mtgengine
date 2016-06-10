"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvoryCup extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivory Cup", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IvoryCup;
