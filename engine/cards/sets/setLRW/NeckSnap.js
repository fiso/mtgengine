"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeckSnap extends Card {
  constructor(game) {
    super(game, "Neck Snap", "Lorwyn", "LRW");
  }
}

module.exports = NeckSnap;
