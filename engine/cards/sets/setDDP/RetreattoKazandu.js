"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RetreattoKazanduBase = require("../setBFZ/RetreattoKazandu.js");

class RetreattoKazandu extends RetreattoKazanduBase {
  constructor(game) {
    super(game, "Retreat to Kazandu", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RetreattoKazandu;
