"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GideonJura extends UnimplementedCard {
  constructor (game) {
    super(game, "Gideon Jura", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = GideonJura;
