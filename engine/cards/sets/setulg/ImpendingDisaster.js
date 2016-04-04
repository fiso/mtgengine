"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpendingDisaster extends Card {
  constructor(game) {
    super(game, "Impending Disaster", "Urza's Legacy", "ULG");
  }
}

module.exports = ImpendingDisaster;
