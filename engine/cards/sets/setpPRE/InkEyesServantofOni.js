"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InkEyesServantofOniBase = require("../setBOK/InkEyesServantofOni.js");

class InkEyesServantofOni extends InkEyesServantofOniBase {
  constructor(game) {
    super(game, "Ink-Eyes, Servant of Oni", "Prerelease Events", "pPRE");
  }
}

module.exports = InkEyesServantofOni;
