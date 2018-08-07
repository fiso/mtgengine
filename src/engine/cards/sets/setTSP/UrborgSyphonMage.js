"use strict";
const Constants = require ("../../../Constants");
const UrborgSyphonMageBase = require("../setGVL/UrborgSyphonMage");

class UrborgSyphonMage extends UrborgSyphonMageBase {
  constructor (game) {
    super(game, "Urborg Syphon-Mage", "Time Spiral", "TSP");
  }
}

module.exports = UrborgSyphonMage;
