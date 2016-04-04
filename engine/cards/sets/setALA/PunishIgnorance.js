"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PunishIgnorance extends Card {
  constructor(game) {
    super(game, "Punish Ignorance", "Shards of Alara", "ALA");
  }
}

module.exports = PunishIgnorance;
