"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flash extends UnimplementedCard {
  constructor (game) {
    super(game, "Flash", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Flash;
