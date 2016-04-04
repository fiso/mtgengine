"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrganGrinder extends Card {
  constructor(game) {
    super(game, "Organ Grinder", "Torment", "TOR");
  }
}

module.exports = OrganGrinder;
