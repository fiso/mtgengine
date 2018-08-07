"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Boon", "Masters Edition", "MED");
  }
}

module.exports = PhyrexianBoon;
