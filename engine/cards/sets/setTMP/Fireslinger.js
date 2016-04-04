"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FireslingerBase = require("../setDD3_JVC/Fireslinger.js");

class Fireslinger extends FireslingerBase {
  constructor(game) {
    super(game, "Fireslinger", "Tempest", "TMP");
  }
}

module.exports = Fireslinger;
