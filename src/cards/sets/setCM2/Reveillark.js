"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reveillark extends UnimplementedCard {
  constructor (game) {
    super(game, "Reveillark", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Reveillark;
