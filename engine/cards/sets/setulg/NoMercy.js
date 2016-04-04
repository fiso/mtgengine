"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoMercy extends UnimplementedCard {
  constructor(game) {
    super(game, "No Mercy", "Urza's Legacy", "ULG");
  }
}

module.exports = NoMercy;
