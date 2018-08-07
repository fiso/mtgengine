"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArdentMilitia extends UnimplementedCard {
  constructor (game) {
    super(game, "Ardent Militia", "Eighth Edition", "8ED");
  }
}

module.exports = ArdentMilitia;
