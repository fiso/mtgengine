"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PunishIgnorance extends UnimplementedCard {
  constructor (game) {
    super(game, "Punish Ignorance", "Shards of Alara", "ALA");
  }
}

module.exports = PunishIgnorance;
