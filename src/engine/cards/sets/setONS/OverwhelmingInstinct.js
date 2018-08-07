"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverwhelmingInstinct extends UnimplementedCard {
  constructor (game) {
    super(game, "Overwhelming Instinct", "Onslaught", "ONS");
  }
}

module.exports = OverwhelmingInstinct;
