"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BackupPlan extends Card {
  constructor(game) {
    super(game, "Backup Plan", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = BackupPlan;
