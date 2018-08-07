"use strict";
const Constants = require ("../../../Constants");
const DesolationTwinBase = require("../setBFZ/DesolationTwin");

class DesolationTwin extends DesolationTwinBase {
  constructor (game) {
    super(game, "Desolation Twin", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = DesolationTwin;
