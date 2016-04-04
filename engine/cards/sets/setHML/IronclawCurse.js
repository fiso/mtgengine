"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IronclawCurseBase = require("../set5ED/IronclawCurse.js");

class IronclawCurse extends IronclawCurseBase {
  constructor(game) {
    super(game, "Ironclaw Curse", "Homelands", "HML");
  }
}

module.exports = IronclawCurse;
