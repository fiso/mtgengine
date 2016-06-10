"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliceinTwain extends UnimplementedCard {
  constructor (game) {
    super(game, "Slice in Twain", "Commander 2013 Edition", "C13");
  }
}

module.exports = SliceinTwain;
