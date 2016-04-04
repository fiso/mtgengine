"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rivalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Rivalry", "Urza's Legacy", "ULG");
  }
}

module.exports = Rivalry;
