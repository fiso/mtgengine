"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clone extends UnimplementedCard {
  constructor (game) {
    super(game, "Clone", "Collector's Edition", "CED");
  }
}

module.exports = Clone;
