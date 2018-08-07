"use strict";
const Constants = require ("../../../Constants");
const RowdyCrewBase = require("../setXLN/RowdyCrew");

class RowdyCrew extends RowdyCrewBase {
  constructor (game) {
    super(game, "Rowdy Crew", "Ixalan Promos", "PXLN");
  }
}

module.exports = RowdyCrew;
