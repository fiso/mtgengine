"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokaDunecaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromoka Dunecaster", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokaDunecaster;
