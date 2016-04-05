"use strict";
const Constants = require ("../../../Constants");
const LeatherbackBalothBase = require("../setWWK/LeatherbackBaloth");

class LeatherbackBaloth extends LeatherbackBalothBase {
  constructor(game) {
    super(game, "Leatherback Baloth", "WPN and Gateway", "pWPN");
  }
}

module.exports = LeatherbackBaloth;
