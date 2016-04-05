"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiracleWorker extends UnimplementedCard {
  constructor(game) {
    super(game, "Miracle Worker", "The Dark", "DRK");
  }
}

module.exports = MiracleWorker;
