"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SadisticAugermageBase = require("../setDDM/SadisticAugermage.js");

class SadisticAugermage extends SadisticAugermageBase {
  constructor(game) {
    super(game, "Sadistic Augermage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SadisticAugermage;
