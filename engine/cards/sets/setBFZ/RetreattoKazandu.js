"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RetreattoKazandu extends UnimplementedCard {
  constructor(game) {
    super(game, "Retreat to Kazandu", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoKazandu;
