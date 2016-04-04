"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AjanisPresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Ajani's Presence", "Journey into Nyx", "JOU");
  }
}

module.exports = AjanisPresence;
