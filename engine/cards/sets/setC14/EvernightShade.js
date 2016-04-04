"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvernightShadeBase = require("../setAVR/EvernightShade.js");

class EvernightShade extends EvernightShadeBase {
  constructor(game) {
    super(game, "Evernight Shade", "Commander 2014", "C14");
  }
}

module.exports = EvernightShade;
