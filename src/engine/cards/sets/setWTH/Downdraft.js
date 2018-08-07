"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Downdraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Downdraft", "Weatherlight", "WTH");
  }
}

module.exports = Downdraft;
