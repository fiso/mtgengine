"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranHomeGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Home Guard", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranHomeGuard;
