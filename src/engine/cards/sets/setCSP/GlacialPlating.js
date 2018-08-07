"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialPlating extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Plating", "Coldsnap", "CSP");
  }
}

module.exports = GlacialPlating;
