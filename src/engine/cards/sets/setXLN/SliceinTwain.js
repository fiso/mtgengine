"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SliceinTwain extends UnimplementedCard {
  constructor (game) {
    super(game, "Slice in Twain", "Ixalan", "XLN");
  }
}

module.exports = SliceinTwain;
