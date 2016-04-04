"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoralHelmBase = require("../setATQ/CoralHelm.js");

class CoralHelm extends CoralHelmBase {
  constructor(game) {
    super(game, "Coral Helm", "Masters Edition IV", "ME4");
  }
}

module.exports = CoralHelm;
