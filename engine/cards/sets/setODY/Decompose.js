"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DecomposeBase = require("../setDDK/Decompose.js");

class Decompose extends DecomposeBase {
  constructor(game) {
    super(game, "Decompose", "Odyssey", "ODY");
  }
}

module.exports = Decompose;
