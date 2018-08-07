"use strict";
const Constants = require ("../../../Constants");
const KnightsPledgeBase = require("../setMTGA/KnightsPledge");

class KnightsPledge extends KnightsPledgeBase {
  constructor (game) {
    super(game, "Knight's Pledge", "Core Set 2019", "M19");
  }
}

module.exports = KnightsPledge;
