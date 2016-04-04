"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InkEyesServantofOniBase = require("../setBOK/InkEyesServantofOni.js");

class InkEyesServantofOni extends InkEyesServantofOniBase {
  constructor(game) {
    super(game, "Ink-Eyes, Servant of Oni", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = InkEyesServantofOni;
