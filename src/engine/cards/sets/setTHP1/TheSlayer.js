"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheSlayer extends UnimplementedCard {
  constructor (game) {
    super(game, "The Slayer", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheSlayer;
