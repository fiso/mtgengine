"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AwesomePresence extends UnimplementedCard {
  constructor (game) {
    super(game, "Awesome Presence", "Alliances", "ALL");
  }
}

module.exports = AwesomePresence;
