"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StagBeetle extends Card {
  constructor(game) {
    super(game, "Stag Beetle", "Onslaught", "ONS");
  }
}

module.exports = StagBeetle;
