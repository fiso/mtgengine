"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BackupPlan extends UnimplementedCard {
  constructor (game) {
    super(game, "Backup Plan", "Conspiracy", "CNS");
  }
}

module.exports = BackupPlan;
