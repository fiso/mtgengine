"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimianGrunts extends UnimplementedCard {
  constructor(game) {
    super(game, "Simian Grunts", "Urza's Legacy", "ULG");
  }
}

module.exports = SimianGrunts;
