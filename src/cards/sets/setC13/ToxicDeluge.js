"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ToxicDeluge extends UnimplementedCard {
  constructor (game) {
    super(game, "Toxic Deluge", "Commander 2013 Edition", "C13");
  }
}

module.exports = ToxicDeluge;
