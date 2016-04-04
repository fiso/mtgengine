"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WickerboughElderBase = require("../setARC/WickerboughElder.js");

class WickerboughElder extends WickerboughElderBase {
  constructor(game) {
    super(game, "Wickerbough Elder", "Eventide", "EVE");
  }
}

module.exports = WickerboughElder;
