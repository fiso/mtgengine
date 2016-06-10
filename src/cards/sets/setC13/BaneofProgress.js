"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaneofProgress extends UnimplementedCard {
  constructor (game) {
    super(game, "Bane of Progress", "Commander 2013 Edition", "C13");
  }
}

module.exports = BaneofProgress;
