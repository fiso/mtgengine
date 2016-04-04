"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KnightofNewAlaraBase = require("../setARB/KnightofNewAlara.js");

class KnightofNewAlara extends KnightofNewAlaraBase {
  constructor(game) {
    super(game, "Knight of New Alara", "Launch Parties", "pLPA");
  }
}

module.exports = KnightofNewAlara;
