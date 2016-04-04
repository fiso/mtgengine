"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MondronenShamanBase = require("../setDKA/MondronenShaman.js");

class MondronenShaman extends MondronenShamanBase {
  constructor(game) {
    super(game, "Mondronen Shaman", "Launch Parties", "pLPA");
  }
}

module.exports = MondronenShaman;
