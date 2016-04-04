"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ShuGeneralBase = require("../setME3/ShuGeneral.js");

class ShuGeneral extends ShuGeneralBase {
  constructor(game) {
    super(game, "Shu General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ShuGeneral;
