"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakaDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Raka Disciple", "Apocalypse", "APC");
  }
}

module.exports = RakaDisciple;
