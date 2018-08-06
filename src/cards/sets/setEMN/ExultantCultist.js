"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExultantCultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Exultant Cultist", "Eldritch Moon", "EMN");
  }
}

module.exports = ExultantCultist;
