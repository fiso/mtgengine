"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Alms extends UnimplementedCard {
  constructor (game) {
    super(game, "Alms", "Weatherlight", "WTH");
  }
}

module.exports = Alms;
