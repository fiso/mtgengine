"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MiracleWorker extends Card {
  constructor(game) {
    super(game, "Miracle Worker", "The Dark", "DRK");
  }
}

module.exports = MiracleWorker;
