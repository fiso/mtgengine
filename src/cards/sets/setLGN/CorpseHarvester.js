"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorpseHarvester extends UnimplementedCard {
  constructor (game) {
    super(game, "Corpse Harvester", "Legions", "LGN");
  }
}

module.exports = CorpseHarvester;
