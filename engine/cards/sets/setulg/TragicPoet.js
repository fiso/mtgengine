"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TragicPoet extends Card {
  constructor(game) {
    super(game, "Tragic Poet", "Urza's Legacy", "ULG");
  }
}

module.exports = TragicPoet;
