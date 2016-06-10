"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Leeches extends UnimplementedCard {
  constructor (game) {
    super(game, "Leeches", "Homelands", "HML");
  }
}

module.exports = Leeches;
