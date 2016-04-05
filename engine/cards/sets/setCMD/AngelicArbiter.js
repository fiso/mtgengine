"use strict";
const Constants = require ("../../../Constants");
const AngelicArbiterBase = require("../setM11/AngelicArbiter");

class AngelicArbiter extends AngelicArbiterBase {
  constructor(game) {
    super(game, "Angelic Arbiter", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AngelicArbiter;
