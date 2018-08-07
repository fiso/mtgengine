"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisposalMummy extends UnimplementedCard {
  constructor (game) {
    super(game, "Disposal Mummy", "Hour of Devastation", "HOU");
  }
}

module.exports = DisposalMummy;
