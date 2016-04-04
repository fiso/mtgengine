"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrumblingVestige extends Card {
  constructor(game) {
    super(game, "Crumbling Vestige", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CrumblingVestige;
