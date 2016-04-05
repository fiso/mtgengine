"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeaceandQuiet extends UnimplementedCard {
  constructor(game) {
    super(game, "Peace and Quiet", "Urza's Legacy", "ULG");
  }
}

module.exports = PeaceandQuiet;
