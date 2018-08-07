"use strict";
const Constants = require ("../../../Constants");
const EvilTwinBase = require("../setBBD/EvilTwin");

class EvilTwin extends EvilTwinBase {
  constructor (game) {
    super(game, "Evil Twin", "Innistrad", "ISD");
  }
}

module.exports = EvilTwin;
