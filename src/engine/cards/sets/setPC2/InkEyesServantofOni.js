"use strict";
const Constants = require ("../../../Constants");
const InkEyesServantofOniBase = require("../setPCA/InkEyesServantofOni");

class InkEyesServantofOni extends InkEyesServantofOniBase {
  constructor (game) {
    super(game, "Ink-Eyes, Servant of Oni", "Planechase 2012", "PC2");
  }
}

module.exports = InkEyesServantofOni;
