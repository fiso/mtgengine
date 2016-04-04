"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InkEyesServantofOniBase = require("../setBOK/InkEyesServantofOni.js");

class InkEyesServantofOni extends InkEyesServantofOniBase {
  constructor(game) {
    super(game, "Ink-Eyes, Servant of Oni", "From the Vault: Twenty", "V13");
  }
}

module.exports = InkEyesServantofOni;
