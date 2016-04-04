"use strict";
const Constants = require ("../../../Constants");
const ShuGeneralBase = require("../setME3/ShuGeneral");

class ShuGeneral extends ShuGeneralBase {
  constructor(game) {
    super(game, "Shu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuGeneral;
