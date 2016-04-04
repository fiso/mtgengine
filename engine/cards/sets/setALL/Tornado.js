"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Tornado extends UnimplementedCard {
  constructor(game) {
    super(game, "Tornado", "Alliances", "ALL");
  }
}

module.exports = Tornado;
