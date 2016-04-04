"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sunweb extends UnimplementedCard {
  constructor(game) {
    super(game, "Sunweb", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Sunweb;
