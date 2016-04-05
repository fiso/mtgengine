"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reveillark extends UnimplementedCard {
  constructor(game) {
    super(game, "Reveillark", "Modern Masters", "MMA");
  }
}

module.exports = Reveillark;
