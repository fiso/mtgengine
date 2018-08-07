"use strict";
const Constants = require ("../../../Constants");
const KnightofNewAlaraBase = require("../setARB/KnightofNewAlara");

class KnightofNewAlara extends KnightofNewAlaraBase {
  constructor (game) {
    super(game, "Knight of New Alara", "Launch Parties", "PLPA");
  }
}

module.exports = KnightofNewAlara;
