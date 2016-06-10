"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranHomeGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Home Guard", "Alliances", "ALL");
  }
}

module.exports = KjeldoranHomeGuard;
