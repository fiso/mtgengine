"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplendidReclamation extends UnimplementedCard {
  constructor (game) {
    super(game, "Splendid Reclamation", "Eldritch Moon", "EMN");
  }
}

module.exports = SplendidReclamation;
