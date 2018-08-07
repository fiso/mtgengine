"use strict";
const Constants = require ("../../../Constants");
const VolrathsLaboratoryBase = require("../setTPR/VolrathsLaboratory");

class VolrathsLaboratory extends VolrathsLaboratoryBase {
  constructor (game) {
    super(game, "Volrath's Laboratory", "Stronghold", "STH");
  }
}

module.exports = VolrathsLaboratory;
