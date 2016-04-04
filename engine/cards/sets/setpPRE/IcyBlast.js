"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcyBlastBase = require("../setKTK/IcyBlast.js");

class IcyBlast extends IcyBlastBase {
  constructor(game) {
    super(game, "Icy Blast", "Prerelease Events", "pPRE");
  }
}

module.exports = IcyBlast;
