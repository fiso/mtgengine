"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MartyrofSands extends UnimplementedCard {
  constructor (game) {
    super(game, "Martyr of Sands", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofSands;
