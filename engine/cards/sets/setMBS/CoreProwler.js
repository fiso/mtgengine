"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoreProwler extends Card {
  constructor(game) {
    super(game, "Core Prowler", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CoreProwler;
