"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KoskunKeep extends Card {
  constructor(game) {
    super(game, "Koskun Keep", "Homelands", "HML");
  }
}

module.exports = KoskunKeep;
