"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunfireBalm extends Card {
  constructor(game) {
    super(game, "Sunfire Balm", "Onslaught", "ONS");
  }
}

module.exports = SunfireBalm;
