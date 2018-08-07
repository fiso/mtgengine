"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunscour extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunscour", "Coldsnap", "CSP");
  }
}

module.exports = Sunscour;
