"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiteWard extends UnimplementedCard {
  constructor (game) {
    super(game, "White Ward", "Collector's Edition", "CED");
  }
}

module.exports = WhiteWard;
