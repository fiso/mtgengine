"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cowardice extends UnimplementedCard {
  constructor (game) {
    super(game, "Cowardice", "Eighth Edition", "8ED");
  }
}

module.exports = Cowardice;
