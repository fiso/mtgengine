"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sparksmith extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparksmith", "Friday Night Magic", "pFNM");
  }
}

module.exports = Sparksmith;
