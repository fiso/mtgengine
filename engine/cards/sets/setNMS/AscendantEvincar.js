"use strict";
const Constants = require ("../../../Constants");
const AscendantEvincarBase = require("../setDPA/AscendantEvincar");

class AscendantEvincar extends AscendantEvincarBase {
  constructor(game) {
    super(game, "Ascendant Evincar", "Nemesis", "NMS");
  }
}

module.exports = AscendantEvincar;
