"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SensationGorger extends UnimplementedCard {
  constructor(game) {
    super(game, "Sensation Gorger", "Morningtide", "MOR");
  }
}

module.exports = SensationGorger;
