"use strict";
const Constants = require ("../../../Constants");
const RetreattoKazanduBase = require("../setE01/RetreattoKazandu");

class RetreattoKazandu extends RetreattoKazanduBase {
  constructor (game) {
    super(game, "Retreat to Kazandu", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RetreattoKazandu;
