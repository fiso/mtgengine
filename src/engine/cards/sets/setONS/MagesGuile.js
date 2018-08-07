"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagesGuile extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage's Guile", "Onslaught", "ONS");
  }
}

module.exports = MagesGuile;
