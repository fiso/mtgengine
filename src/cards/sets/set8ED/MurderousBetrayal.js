"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurderousBetrayal extends UnimplementedCard {
  constructor (game) {
    super(game, "Murderous Betrayal", "Eighth Edition", "8ED");
  }
}

module.exports = MurderousBetrayal;
