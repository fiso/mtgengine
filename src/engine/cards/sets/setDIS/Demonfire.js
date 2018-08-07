"use strict";
const Constants = require ("../../../Constants");
const DemonfireBase = require("../setJVC/Demonfire");

class Demonfire extends DemonfireBase {
  constructor (game) {
    super(game, "Demonfire", "Dissension", "DIS");
  }
}

module.exports = Demonfire;
