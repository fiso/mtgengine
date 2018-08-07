"use strict";
const Constants = require ("../../../Constants");
const FireslingerBase = require("../setJVC/Fireslinger");

class Fireslinger extends FireslingerBase {
  constructor (game) {
    super(game, "Fireslinger", "Tempest", "TMP");
  }
}

module.exports = Fireslinger;
