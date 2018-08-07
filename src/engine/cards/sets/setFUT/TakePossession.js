"use strict";
const Constants = require ("../../../Constants");
const TakePossessionBase = require("../setMMA/TakePossession");

class TakePossession extends TakePossessionBase {
  constructor (game) {
    super(game, "Take Possession", "Future Sight", "FUT");
  }
}

module.exports = TakePossession;
