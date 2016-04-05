"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraspofDarkness extends UnimplementedCard {
  constructor(game) {
    super(game, "Grasp of Darkness", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GraspofDarkness;
