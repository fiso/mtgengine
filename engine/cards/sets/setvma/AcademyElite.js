"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AcademyEliteBase = require("../setCNS/AcademyElite.js");

class AcademyElite extends AcademyEliteBase {
  constructor(game) {
    super(game, "Academy Elite", "Vintage Masters", "VMA");
  }
}

module.exports = AcademyElite;
