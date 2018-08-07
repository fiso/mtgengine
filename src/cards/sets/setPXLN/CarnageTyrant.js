"use strict";
const Constants = require ("../../../Constants");
const CarnageTyrantBase = require("../setXLN/CarnageTyrant");

class CarnageTyrant extends CarnageTyrantBase {
  constructor (game) {
    super(game, "Carnage Tyrant", "Ixalan Promos", "PXLN");
  }
}

module.exports = CarnageTyrant;
