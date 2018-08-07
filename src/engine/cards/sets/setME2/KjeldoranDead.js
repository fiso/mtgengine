"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KjeldoranDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Kjeldoran Dead", "Masters Edition II", "ME2");
  }
}

module.exports = KjeldoranDead;
