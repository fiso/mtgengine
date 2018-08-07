"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakshasaVizier extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakshasa Vizier", "Khans of Tarkir", "KTK");
  }
}

module.exports = RakshasaVizier;
