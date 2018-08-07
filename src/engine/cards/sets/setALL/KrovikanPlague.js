"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanPlague extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Plague", "Alliances", "ALL");
  }
}

module.exports = KrovikanPlague;
