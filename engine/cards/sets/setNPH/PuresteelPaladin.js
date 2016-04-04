"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PuresteelPaladin extends Card {
  constructor(game) {
    super(game, "Puresteel Paladin", "New Phyrexia", "NPH");
  }
}

module.exports = PuresteelPaladin;
