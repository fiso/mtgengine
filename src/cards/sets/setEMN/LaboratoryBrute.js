"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaboratoryBrute extends UnimplementedCard {
  constructor (game) {
    super(game, "Laboratory Brute", "Eldritch Moon", "EMN");
  }
}

module.exports = LaboratoryBrute;
