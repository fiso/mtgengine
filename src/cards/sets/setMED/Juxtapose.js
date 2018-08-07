"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Juxtapose extends UnimplementedCard {
  constructor (game) {
    super(game, "Juxtapose", "Masters Edition", "MED");
  }
}

module.exports = Juxtapose;
