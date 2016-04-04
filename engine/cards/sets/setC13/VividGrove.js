"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VividGrove extends UnimplementedCard {
  constructor(game) {
    super(game, "Vivid Grove", "Commander 2013 Edition", "C13");
  }
}

module.exports = VividGrove;
