"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UncleIstvan extends UnimplementedCard {
  constructor (game) {
    super(game, "Uncle Istvan", "Fourth Edition", "4ED");
  }
}

module.exports = UncleIstvan;
