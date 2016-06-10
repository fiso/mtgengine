"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GutShot extends UnimplementedCard {
  constructor (game) {
    super(game, "Gut Shot", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GutShot;
