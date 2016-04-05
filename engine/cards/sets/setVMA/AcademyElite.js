"use strict";
const Constants = require ("../../../Constants");
const AcademyEliteBase = require("../setCNS/AcademyElite");

class AcademyElite extends AcademyEliteBase {
  constructor(game) {
    super(game, "Academy Elite", "Vintage Masters", "VMA");
  }
}

module.exports = AcademyElite;
