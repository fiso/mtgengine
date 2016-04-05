"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreneticRaptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Frenetic Raptor", "Legions", "LGN");
  }
}

module.exports = FreneticRaptor;
