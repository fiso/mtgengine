"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirkMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Skirk Marauder", "Archenemy", "ARC");
  }
}

module.exports = SkirkMarauder;
