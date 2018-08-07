"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TormentorsTrident extends UnimplementedCard {
  constructor (game) {
    super(game, "Tormentor's Trident", "Avacyn Restored", "AVR");
  }
}

module.exports = TormentorsTrident;
