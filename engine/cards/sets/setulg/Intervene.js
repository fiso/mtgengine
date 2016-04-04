"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Intervene extends UnimplementedCard {
  constructor(game) {
    super(game, "Intervene", "Urza's Legacy", "ULG");
  }
}

module.exports = Intervene;
