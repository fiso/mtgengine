"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RetreattoKazandu extends Card {
  constructor(game) {
    super(game, "Retreat to Kazandu", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoKazandu;
