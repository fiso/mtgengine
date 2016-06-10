"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentMilitia extends UnimplementedCard {
  constructor (game) {
    super(game, "Ardent Militia", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ArdentMilitia;
