"use strict";
const Constants = require ("../../../Constants");
const MoggHollowsBase = require("../setBRB/MoggHollows");

class MoggHollows extends MoggHollowsBase {
  constructor (game) {
    super(game, "Mogg Hollows", "Tempest Remastered", "TPR");
  }
}

module.exports = MoggHollows;
