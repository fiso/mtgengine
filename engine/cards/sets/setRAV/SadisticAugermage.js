"use strict";
const Constants = require ("../../../Constants");
const SadisticAugermageBase = require("../setDDM/SadisticAugermage");

class SadisticAugermage extends SadisticAugermageBase {
  constructor(game) {
    super(game, "Sadistic Augermage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SadisticAugermage;
