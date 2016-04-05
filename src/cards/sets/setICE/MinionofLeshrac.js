"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionofLeshrac extends UnimplementedCard {
  constructor(game) {
    super(game, "Minion of Leshrac", "Ice Age", "ICE");
  }
}

module.exports = MinionofLeshrac;
