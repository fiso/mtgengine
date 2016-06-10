"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Python extends UnimplementedCard {
  constructor (game) {
    super(game, "Python", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Python;
