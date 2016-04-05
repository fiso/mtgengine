"use strict";
const Constants = require ("../../../Constants");
const MondronenShamanBase = require("../setDKA/MondronenShaman");

class MondronenShaman extends MondronenShamanBase {
  constructor(game) {
    super(game, "Mondronen Shaman", "Launch Parties", "pLPA");
  }
}

module.exports = MondronenShaman;
