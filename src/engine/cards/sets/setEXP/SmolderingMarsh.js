"use strict";
const Constants = require ("../../../Constants");
const SmolderingMarshBase = require("../setBFZ/SmolderingMarsh");

class SmolderingMarsh extends SmolderingMarshBase {
  constructor (game) {
    super(game, "Smoldering Marsh", "Zendikar Expeditions", "EXP");
  }
}

module.exports = SmolderingMarsh;
