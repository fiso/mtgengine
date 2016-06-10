"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptingScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Disrupting Scepter", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DisruptingScepter;
