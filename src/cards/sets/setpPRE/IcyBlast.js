"use strict";
const Constants = require ("../../../Constants");
const IcyBlastBase = require("../setKTK/IcyBlast");

class IcyBlast extends IcyBlastBase {
  constructor (game) {
    super(game, "Icy Blast", "Prerelease Events", "pPRE");
  }
}

module.exports = IcyBlast;
