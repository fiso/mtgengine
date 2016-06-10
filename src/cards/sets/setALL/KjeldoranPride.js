"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranPride extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Pride", "Alliances", "ALL");
  }
}

module.exports = KjeldoranPride;
