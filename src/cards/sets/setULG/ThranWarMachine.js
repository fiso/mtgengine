"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranWarMachine extends UnimplementedCard {
  constructor(game) {
    super(game, "Thran War Machine", "Urza's Legacy", "ULG");
  }
}

module.exports = ThranWarMachine;
