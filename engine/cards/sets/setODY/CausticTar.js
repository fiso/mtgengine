"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CausticTarBase = require("../setM15/CausticTar.js");

class CausticTar extends CausticTarBase {
  constructor(game) {
    super(game, "Caustic Tar", "Odyssey", "ODY");
  }
}

module.exports = CausticTar;
