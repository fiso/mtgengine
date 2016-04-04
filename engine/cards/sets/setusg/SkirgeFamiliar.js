"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkirgeFamiliar extends Card {
  constructor(game) {
    super(game, "Skirge Familiar", "Urza's Saga", "USG");
  }
}

module.exports = SkirgeFamiliar;
