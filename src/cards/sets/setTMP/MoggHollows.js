"use strict";
const Constants = require ("../../../Constants");
const MoggHollowsBase = require("../setTPR/MoggHollows");

class MoggHollows extends MoggHollowsBase {
  constructor (game) {
    super(game, "Mogg Hollows", "Tempest", "TMP");
  }
}

module.exports = MoggHollows;
