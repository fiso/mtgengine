"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinionoftheWastes extends UnimplementedCard {
  constructor (game) {
    super(game, "Minion of the Wastes", "Tempest", "TMP");
  }
}

module.exports = MinionoftheWastes;
