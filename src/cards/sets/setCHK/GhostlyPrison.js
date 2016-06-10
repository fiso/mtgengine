"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyPrison extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Prison", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GhostlyPrison;
