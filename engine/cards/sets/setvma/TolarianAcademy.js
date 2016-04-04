"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TolarianAcademyBase = require("../setUSG/TolarianAcademy.js");

class TolarianAcademy extends TolarianAcademyBase {
  constructor(game) {
    super(game, "Tolarian Academy", "Vintage Masters", "VMA");
  }
}

module.exports = TolarianAcademy;
