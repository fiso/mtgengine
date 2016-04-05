"use strict";
const Constants = require ("../../../Constants");
const CowardiceBase = require("../set8ED/Cowardice");

class Cowardice extends CowardiceBase {
  constructor(game) {
    super(game, "Cowardice", "Ninth Edition", "9ED");
  }
}

module.exports = Cowardice;
