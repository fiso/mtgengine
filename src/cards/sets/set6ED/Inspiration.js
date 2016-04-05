"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Inspiration extends UnimplementedCard {
  constructor(game) {
    super(game, "Inspiration", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Inspiration;
