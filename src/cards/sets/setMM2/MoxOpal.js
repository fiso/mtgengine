"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxOpal extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Opal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MoxOpal;
