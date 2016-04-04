"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritualAsylum extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiritual Asylum", "Nemesis", "NMS");
  }
}

module.exports = SpiritualAsylum;
