"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VividCreek extends UnimplementedCard {
  constructor(game) {
    super(game, "Vivid Creek", "Commander 2013 Edition", "C13");
  }
}

module.exports = VividCreek;
