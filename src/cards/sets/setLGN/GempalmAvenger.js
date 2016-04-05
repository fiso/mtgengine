"use strict";
const Constants = require ("../../../Constants");
const GempalmAvengerBase = require("../setDDO/GempalmAvenger");

class GempalmAvenger extends GempalmAvengerBase {
  constructor(game) {
    super(game, "Gempalm Avenger", "Legions", "LGN");
  }
}

module.exports = GempalmAvenger;
