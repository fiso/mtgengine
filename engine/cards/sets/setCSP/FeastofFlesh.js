"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeastofFlesh extends Card {
  constructor(game) {
    super(game, "Feast of Flesh", "Coldsnap", "CSP");
  }
}

module.exports = FeastofFlesh;
