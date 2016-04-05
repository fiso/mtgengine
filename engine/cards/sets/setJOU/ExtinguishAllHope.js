"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtinguishAllHope extends UnimplementedCard {
  constructor(game) {
    super(game, "Extinguish All Hope", "Journey into Nyx", "JOU");
  }
}

module.exports = ExtinguishAllHope;
