"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlisteningOil extends UnimplementedCard {
  constructor (game) {
    super(game, "Glistening Oil", "New Phyrexia", "NPH");
  }
}

module.exports = GlisteningOil;
