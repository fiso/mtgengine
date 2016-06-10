"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IgniteDisorder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ignite Disorder", "Conflux", "CON");
  }
}

module.exports = IgniteDisorder;
