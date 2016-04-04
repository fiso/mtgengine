"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelAxe extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Axe", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DarksteelAxe;
