"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DegaDisciple extends UnimplementedCard {
  constructor (game) {
    super(game, "Dega Disciple", "Apocalypse", "APC");
  }
}

module.exports = DegaDisciple;
