"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Swat extends UnimplementedCard {
  constructor (game) {
    super(game, "Swat", "Onslaught", "ONS");
  }
}

module.exports = Swat;
