"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecraDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Necra Disciple", "Apocalypse", "APC");
  }
}

module.exports = NecraDisciple;
