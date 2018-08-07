"use strict";
const Constants = require ("../../../Constants");
const TraversetheUlvenwaldBase = require("../setSOI/TraversetheUlvenwald");

class TraversetheUlvenwald extends TraversetheUlvenwaldBase {
  constructor (game) {
    super(game, "Traverse the Ulvenwald", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = TraversetheUlvenwald;
