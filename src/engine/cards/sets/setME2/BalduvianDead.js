"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Balduvian Dead", "Masters Edition II", "ME2");
  }
}

module.exports = BalduvianDead;
