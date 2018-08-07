"use strict";
const Constants = require ("../../../Constants");
const AngelicArbiterBase = require("../setCMA/AngelicArbiter");

class AngelicArbiter extends AngelicArbiterBase {
  constructor (game) {
    super(game, "Angelic Arbiter", "Magic 2011", "M11");
  }
}

module.exports = AngelicArbiter;
