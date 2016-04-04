"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SaltblastBase = require("../setDDF/Saltblast.js");

class Saltblast extends SaltblastBase {
  constructor(game) {
    super(game, "Saltblast", "Planar Chaos", "PLC");
  }
}

module.exports = Saltblast;
