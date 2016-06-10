"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Uproot extends UnimplementedCard {
  constructor (game) {
    super(game, "Uproot", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Uproot;
