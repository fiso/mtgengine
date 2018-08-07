"use strict";
const Constants = require ("../../../Constants");
const AngelicArbiterBase = require("../setCMA/AngelicArbiter");

class AngelicArbiter extends AngelicArbiterBase {
  constructor (game) {
    super(game, "Angelic Arbiter", "Commander 2011", "CMD");
  }
}

module.exports = AngelicArbiter;
