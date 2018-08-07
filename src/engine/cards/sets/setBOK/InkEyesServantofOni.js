"use strict";
const Constants = require ("../../../Constants");
const InkEyesServantofOniBase = require("../setPCA/InkEyesServantofOni");

class InkEyesServantofOni extends InkEyesServantofOniBase {
  constructor (game) {
    super(game, "Ink-Eyes, Servant of Oni", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = InkEyesServantofOni;
