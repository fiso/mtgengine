"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CurseofThirstBase = require("../setDKA/CurseofThirst.js");

class CurseofThirst extends CurseofThirstBase {
  constructor(game) {
    super(game, "Curse of Thirst", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseofThirst;
