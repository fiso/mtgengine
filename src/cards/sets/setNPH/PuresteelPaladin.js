"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuresteelPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Puresteel Paladin", "New Phyrexia", "NPH");
  }
}

module.exports = PuresteelPaladin;
