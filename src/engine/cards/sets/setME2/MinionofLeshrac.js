"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionofLeshrac extends UnimplementedCard {
  constructor (game) {
    super(game, "Minion of Leshrac", "Masters Edition II", "ME2");
  }
}

module.exports = MinionofLeshrac;
