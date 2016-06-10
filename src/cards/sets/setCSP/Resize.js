"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Resize extends UnimplementedCard {
  constructor (game) {
    super(game, "Resize", "Coldsnap", "CSP");
  }
}

module.exports = Resize;
