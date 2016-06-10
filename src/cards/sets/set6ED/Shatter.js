"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shatter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shatter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Shatter;
