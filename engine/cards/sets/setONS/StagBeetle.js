"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StagBeetle extends UnimplementedCard {
  constructor(game) {
    super(game, "Stag Beetle", "Onslaught", "ONS");
  }
}

module.exports = StagBeetle;
