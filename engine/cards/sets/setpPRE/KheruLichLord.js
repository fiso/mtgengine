"use strict";
const Constants = require ("../../../Constants");
const KheruLichLordBase = require("../setKTK/KheruLichLord");

class KheruLichLord extends KheruLichLordBase {
  constructor(game) {
    super(game, "Kheru Lich Lord", "Prerelease Events", "pPRE");
  }
}

module.exports = KheruLichLord;
