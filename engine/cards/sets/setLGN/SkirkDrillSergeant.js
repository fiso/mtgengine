"use strict";
const Constants = require ("../../../Constants");
const SkirkDrillSergeantBase = require("../setDD3_EVG/SkirkDrillSergeant");

class SkirkDrillSergeant extends SkirkDrillSergeantBase {
  constructor(game) {
    super(game, "Skirk Drill Sergeant", "Legions", "LGN");
  }
}

module.exports = SkirkDrillSergeant;
