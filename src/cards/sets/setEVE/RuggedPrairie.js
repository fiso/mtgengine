"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuggedPrairie extends UnimplementedCard {
  constructor (game) {
    super(game, "Rugged Prairie", "Eventide", "EVE");
  }
}

module.exports = RuggedPrairie;
