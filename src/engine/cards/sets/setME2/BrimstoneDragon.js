"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrimstoneDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Brimstone Dragon", "Masters Edition II", "ME2");
  }
}

module.exports = BrimstoneDragon;
