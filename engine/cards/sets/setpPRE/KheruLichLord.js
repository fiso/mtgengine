"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KheruLichLordBase = require("../setKTK/KheruLichLord.js");

class KheruLichLord extends KheruLichLordBase {
  constructor(game) {
    super(game, "Kheru Lich Lord", "Prerelease Events", "pPRE");
  }
}

module.exports = KheruLichLord;
