"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RubyMedallion extends UnimplementedCard {
  constructor(game) {
    super(game, "Ruby Medallion", "Commander 2014", "C14");
  }
}

module.exports = RubyMedallion;
