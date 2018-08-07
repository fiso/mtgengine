"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaronVonCount extends UnimplementedCard {
  constructor (game) {
    super(game, "Baron Von Count", "Unstable", "UST");
  }
}

module.exports = BaronVonCount;
