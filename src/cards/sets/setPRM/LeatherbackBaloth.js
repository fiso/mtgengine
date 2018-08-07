"use strict";
const Constants = require ("../../../Constants");
const LeatherbackBalothBase = require("../setWWK/LeatherbackBaloth");

class LeatherbackBaloth extends LeatherbackBalothBase {
  constructor (game) {
    super(game, "Leatherback Baloth", "Magic Online Promos", "PRM");
  }
}

module.exports = LeatherbackBaloth;
