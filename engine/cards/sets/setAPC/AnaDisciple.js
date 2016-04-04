"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnaDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Ana Disciple", "Apocalypse", "APC");
  }
}

module.exports = AnaDisciple;
