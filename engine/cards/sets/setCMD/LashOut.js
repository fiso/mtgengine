"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LashOutBase = require("../setLRW/LashOut.js");

class LashOut extends LashOutBase {
  constructor(game) {
    super(game, "Lash Out", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = LashOut;
