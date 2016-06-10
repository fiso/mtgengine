"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StripedBears extends UnimplementedCard {
  constructor (game) {
    super(game, "Striped Bears", "Weatherlight", "WTH");
  }
}

module.exports = StripedBears;
