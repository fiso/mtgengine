"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AssemblyWorker extends UnimplementedCard {
  constructor (game) {
    super(game, "Assembly-Worker", "Masters 25", "A25");
  }
}

module.exports = AssemblyWorker;
