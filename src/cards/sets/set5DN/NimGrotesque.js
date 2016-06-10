"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NimGrotesque extends UnimplementedCard {
  constructor (game) {
    super(game, "Nim Grotesque", "Fifth Dawn", "5DN");
  }
}

module.exports = NimGrotesque;
