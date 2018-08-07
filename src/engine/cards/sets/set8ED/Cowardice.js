"use strict";
const Constants = require ("../../../Constants");
const CowardiceBase = require("../set9ED/Cowardice");

class Cowardice extends CowardiceBase {
  constructor (game) {
    super(game, "Cowardice", "Eighth Edition", "8ED");
  }
}

module.exports = Cowardice;
