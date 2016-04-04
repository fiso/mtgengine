"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SafeholdElite extends Card {
  constructor(game) {
    super(game, "Safehold Elite", "Shadowmoor", "SHM");
  }
}

module.exports = SafeholdElite;
