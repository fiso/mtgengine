"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Revive extends UnimplementedCard {
  constructor (game) {
    super(game, "Revive", "Eighth Edition", "8ED");
  }
}

module.exports = Revive;
