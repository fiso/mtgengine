"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmolderingMarshBase = require("../setBFZ/SmolderingMarsh.js");

class SmolderingMarsh extends SmolderingMarshBase {
  constructor(game) {
    super(game, "Smoldering Marsh", "Zendikar Expedition", "EXP");
  }
}

module.exports = SmolderingMarsh;
