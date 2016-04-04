"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UmezawasJitteBase = require("../setBOK/UmezawasJitte.js");

class UmezawasJitte extends UmezawasJitteBase {
  constructor(game) {
    super(game, "Umezawa's Jitte", "Grand Prix", "pGPX");
  }
}

module.exports = UmezawasJitte;
