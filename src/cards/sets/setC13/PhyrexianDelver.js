"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDelver extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Delver", "Commander 2013 Edition", "C13");
  }
}

module.exports = PhyrexianDelver;
