"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisruptingScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Disrupting Scepter", "Ninth Edition", "9ED");
  }
}

module.exports = DisruptingScepter;
