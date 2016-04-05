"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QarsiDeceiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Qarsi Deceiver", "Dragons of Tarkir", "DTK");
  }
}

module.exports = QarsiDeceiver;
