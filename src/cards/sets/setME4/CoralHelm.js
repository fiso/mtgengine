"use strict";
const Constants = require ("../../../Constants");
const CoralHelmBase = require("../setATQ/CoralHelm");

class CoralHelm extends CoralHelmBase {
  constructor(game) {
    super(game, "Coral Helm", "Masters Edition IV", "ME4");
  }
}

module.exports = CoralHelm;
