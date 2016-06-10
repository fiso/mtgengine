"use strict";
const Constants = require ("../../../Constants");
const TolarianAcademyBase = require("../setUSG/TolarianAcademy");

class TolarianAcademy extends TolarianAcademyBase {
  constructor (game) {
    super(game, "Tolarian Academy", "Vintage Masters", "VMA");
  }
}

module.exports = TolarianAcademy;
