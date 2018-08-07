"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostOrderofJarkeld extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Order of Jarkeld", "Masters Edition II", "ME2");
  }
}

module.exports = LostOrderofJarkeld;
