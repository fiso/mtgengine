"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Exclude extends UnimplementedCard {
  constructor (game) {
    super(game, "Exclude", "Commander 2014", "C14");
  }
}

module.exports = Exclude;
