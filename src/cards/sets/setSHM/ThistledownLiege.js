"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThistledownLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Thistledown Liege", "Shadowmoor", "SHM");
  }
}

module.exports = ThistledownLiege;
