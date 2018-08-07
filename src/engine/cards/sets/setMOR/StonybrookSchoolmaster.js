"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StonybrookSchoolmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Stonybrook Schoolmaster", "Morningtide", "MOR");
  }
}

module.exports = StonybrookSchoolmaster;
