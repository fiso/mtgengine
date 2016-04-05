"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterHarvester extends UnimplementedCard {
  constructor(game) {
    super(game, "Greater Harvester", "Darksteel", "DST");
  }
}

module.exports = GreaterHarvester;
