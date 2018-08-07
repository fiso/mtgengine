"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProperLaboratoryAttire extends UnimplementedCard {
  constructor (game) {
    super(game, "Proper Laboratory Attire", "Unstable", "UST");
  }
}

module.exports = ProperLaboratoryAttire;
