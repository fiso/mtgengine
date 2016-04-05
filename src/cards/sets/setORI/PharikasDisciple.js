"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PharikasDisciple extends UnimplementedCard {
  constructor(game) {
    super(game, "Pharika's Disciple", "Magic Origins", "ORI");
  }
}

module.exports = PharikasDisciple;
