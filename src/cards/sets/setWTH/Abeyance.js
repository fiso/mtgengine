"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Abeyance extends UnimplementedCard {
  constructor (game) {
    super(game, "Abeyance", "Weatherlight", "WTH");
  }
}

module.exports = Abeyance;
