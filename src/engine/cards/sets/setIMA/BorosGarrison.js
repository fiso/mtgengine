"use strict";
const Constants = require ("../../../Constants");
const BorosGarrisonBase = require("../setCM2/BorosGarrison");

class BorosGarrison extends BorosGarrisonBase {
  constructor (game) {
    super(game, "Boros Garrison", "Iconic Masters", "IMA");
  }
}

module.exports = BorosGarrison;
