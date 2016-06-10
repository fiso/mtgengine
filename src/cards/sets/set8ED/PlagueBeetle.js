"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlagueBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Plague Beetle", "Eighth Edition", "8ED");
  }
}

module.exports = PlagueBeetle;
