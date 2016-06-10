"use strict";
const Constants = require ("../../../Constants");
const CorpsehatchBase = require("../setDDP/Corpsehatch");

class Corpsehatch extends CorpsehatchBase {
  constructor (game) {
    super(game, "Corpsehatch", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Corpsehatch;
