"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CurseoftheBloodyTomeBase = require("../setISD/CurseoftheBloodyTome.js");

class CurseoftheBloodyTome extends CurseoftheBloodyTomeBase {
  constructor(game) {
    super(game, "Curse of the Bloody Tome", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseoftheBloodyTome;
