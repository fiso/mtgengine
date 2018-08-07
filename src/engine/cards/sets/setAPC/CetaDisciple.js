"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CetaDisciple extends UnimplementedCard {
  constructor (game) {
    super(game, "Ceta Disciple", "Apocalypse", "APC");
  }
}

module.exports = CetaDisciple;
