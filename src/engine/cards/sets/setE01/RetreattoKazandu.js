"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetreattoKazandu extends UnimplementedCard {
  constructor (game) {
    super(game, "Retreat to Kazandu", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = RetreattoKazandu;
