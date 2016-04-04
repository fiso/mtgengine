"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninArmorguard extends Card {
  constructor(game) {
    super(game, "Leonin Armorguard", "Alara Reborn", "ARB");
  }
}

module.exports = LeoninArmorguard;
