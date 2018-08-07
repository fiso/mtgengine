"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheHarvester extends UnimplementedCard {
  constructor (game) {
    super(game, "The Harvester", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheHarvester;
