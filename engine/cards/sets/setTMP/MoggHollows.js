"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggHollowsBase = require("../setBRB/MoggHollows.js");

class MoggHollows extends MoggHollowsBase {
  constructor(game) {
    super(game, "Mogg Hollows", "Tempest", "TMP");
  }
}

module.exports = MoggHollows;
