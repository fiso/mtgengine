"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RubyMedallion extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruby Medallion", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = RubyMedallion;
