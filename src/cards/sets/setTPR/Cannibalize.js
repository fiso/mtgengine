"use strict";
const Constants = require ("../../../Constants");
const CannibalizeBase = require("../setSTH/Cannibalize");

class Cannibalize extends CannibalizeBase {
  constructor (game) {
    super(game, "Cannibalize", "Tempest Remastered", "TPR");
  }
}

module.exports = Cannibalize;
