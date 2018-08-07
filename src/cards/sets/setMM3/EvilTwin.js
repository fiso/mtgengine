"use strict";
const Constants = require ("../../../Constants");
const EvilTwinBase = require("../setBBD/EvilTwin");

class EvilTwin extends EvilTwinBase {
  constructor (game) {
    super(game, "Evil Twin", "Modern Masters 2017", "MM3");
  }
}

module.exports = EvilTwin;
