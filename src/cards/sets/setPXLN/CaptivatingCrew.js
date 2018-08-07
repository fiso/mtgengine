"use strict";
const Constants = require ("../../../Constants");
const CaptivatingCrewBase = require("../setXLN/CaptivatingCrew");

class CaptivatingCrew extends CaptivatingCrewBase {
  constructor (game) {
    super(game, "Captivating Crew", "Ixalan Promos", "PXLN");
  }
}

module.exports = CaptivatingCrew;
