"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarmlessAssault extends UnimplementedCard {
  constructor (game) {
    super(game, "Harmless Assault", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HarmlessAssault;
