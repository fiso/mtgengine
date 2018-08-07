"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skred extends UnimplementedCard {
  constructor (game) {
    super(game, "Skred", "Coldsnap", "CSP");
  }
}

module.exports = Skred;
