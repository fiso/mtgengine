"use strict";
const Constants = require ("../../../Constants");
const UmezawasJitteBase = require("../setBOK/UmezawasJitte");

class UmezawasJitte extends UmezawasJitteBase {
  constructor(game) {
    super(game, "Umezawa's Jitte", "Grand Prix", "pGPX");
  }
}

module.exports = UmezawasJitte;
