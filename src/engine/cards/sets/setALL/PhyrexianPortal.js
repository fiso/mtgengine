"use strict";
const Constants = require ("../../../Constants");
const PhyrexianPortalBase = require("../setME2/PhyrexianPortal");

class PhyrexianPortal extends PhyrexianPortalBase {
  constructor (game) {
    super(game, "Phyrexian Portal", "Alliances", "ALL");
  }
}

module.exports = PhyrexianPortal;
