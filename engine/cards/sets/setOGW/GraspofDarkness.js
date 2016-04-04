"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraspofDarkness extends Card {
  constructor(game) {
    super(game, "Grasp of Darkness", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GraspofDarkness;
