"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reprisal extends UnimplementedCard {
  constructor(game) {
    super(game, "Reprisal", "Alliances", "ALL");
  }
}

module.exports = Reprisal;
