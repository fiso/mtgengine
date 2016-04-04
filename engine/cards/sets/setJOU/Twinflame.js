"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Twinflame extends UnimplementedCard {
  constructor(game) {
    super(game, "Twinflame", "Journey into Nyx", "JOU");
  }
}

module.exports = Twinflame;
