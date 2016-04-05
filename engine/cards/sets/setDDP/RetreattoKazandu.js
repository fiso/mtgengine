"use strict";
const Constants = require ("../../../Constants");
const RetreattoKazanduBase = require("../setBFZ/RetreattoKazandu");

class RetreattoKazandu extends RetreattoKazanduBase {
  constructor(game) {
    super(game, "Retreat to Kazandu", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RetreattoKazandu;
