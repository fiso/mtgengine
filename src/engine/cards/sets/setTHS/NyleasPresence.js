"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NyleasPresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Nylea's Presence", "Theros", "THS");
  }
}

module.exports = NyleasPresence;
