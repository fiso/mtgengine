"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilentSpecter extends Card {
  constructor(game) {
    super(game, "Silent Specter", "Onslaught", "ONS");
  }
}

module.exports = SilentSpecter;
