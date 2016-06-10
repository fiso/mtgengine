"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KessigMalcontents extends UnimplementedCard {
  constructor (game) {
    super(game, "Kessig Malcontents", "Avacyn Restored", "AVR");
  }
}

module.exports = KessigMalcontents;
