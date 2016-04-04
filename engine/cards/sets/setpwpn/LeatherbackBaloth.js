"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeatherbackBalothBase = require("../setWWK/LeatherbackBaloth.js");

class LeatherbackBaloth extends LeatherbackBalothBase {
  constructor(game) {
    super(game, "Leatherback Baloth", "WPN and Gateway", "pWPN");
  }
}

module.exports = LeatherbackBaloth;
