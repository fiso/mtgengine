"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Myrsmith extends UnimplementedCard {
  constructor(game) {
    super(game, "Myrsmith", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Myrsmith;
