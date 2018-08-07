"use strict";
const Constants = require ("../../../Constants");
const LeatherbackBalothBase = require("../setWWK/LeatherbackBaloth");

class LeatherbackBaloth extends LeatherbackBalothBase {
  constructor (game) {
    super(game, "Leatherback Baloth", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = LeatherbackBaloth;
