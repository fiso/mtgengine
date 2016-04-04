"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozilektheGreatDistortion extends UnimplementedCard {
  constructor(game) {
    super(game, "Kozilek, the Great Distortion", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozilektheGreatDistortion;
