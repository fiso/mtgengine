"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigardianPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigardian Priest", "Eldritch Moon", "EMN");
  }
}

module.exports = SigardianPriest;
