"use strict";
const Constants = require ("../../../Constants");
const MurderofCrowsBase = require("../setA25/MurderofCrows");

class MurderofCrows extends MurderofCrowsBase {
  constructor (game) {
    super(game, "Murder of Crows", "Innistrad", "ISD");
  }
}

module.exports = MurderofCrows;
