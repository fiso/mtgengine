"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardofPiety extends UnimplementedCard {
  constructor (game) {
    super(game, "Ward of Piety", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WardofPiety;
