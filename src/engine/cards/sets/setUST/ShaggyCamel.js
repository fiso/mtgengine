"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShaggyCamel extends UnimplementedCard {
  constructor (game) {
    super(game, "Shaggy Camel", "Unstable", "UST");
  }
}

module.exports = ShaggyCamel;
