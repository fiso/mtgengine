"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokasGift extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromoka's Gift", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokasGift;
