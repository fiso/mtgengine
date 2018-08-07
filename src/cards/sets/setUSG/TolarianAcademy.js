"use strict";
const Constants = require ("../../../Constants");
const TolarianAcademyBase = require("../setVMA/TolarianAcademy");

class TolarianAcademy extends TolarianAcademyBase {
  constructor (game) {
    super(game, "Tolarian Academy", "Urza's Saga", "USG");
  }
}

module.exports = TolarianAcademy;
