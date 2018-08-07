"use strict";
const Constants = require ("../../../Constants");
const SubterraneanTremorsBase = require("../setPZ2/SubterraneanTremors");

class SubterraneanTremors extends SubterraneanTremorsBase {
  constructor (game) {
    super(game, "Subterranean Tremors", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SubterraneanTremors;
