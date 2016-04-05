"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Palinchron extends UnimplementedCard {
  constructor(game) {
    super(game, "Palinchron", "Urza's Legacy", "ULG");
  }
}

module.exports = Palinchron;
