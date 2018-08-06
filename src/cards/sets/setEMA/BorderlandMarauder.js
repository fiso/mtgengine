"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorderlandMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Borderland Marauder", "Eternal Masters", "EMA");
  }
}

module.exports = BorderlandMarauder;
