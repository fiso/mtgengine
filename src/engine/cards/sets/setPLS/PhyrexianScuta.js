"use strict";
const Constants = require ("../../../Constants");
const PhyrexianScutaBase = require("../setWC01/PhyrexianScuta");

class PhyrexianScuta extends PhyrexianScutaBase {
  constructor (game) {
    super(game, "Phyrexian Scuta", "Planeshift", "PLS");
  }
}

module.exports = PhyrexianScuta;
