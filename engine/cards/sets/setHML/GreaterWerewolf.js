"use strict";
const Constants = require ("../../../Constants");
const GreaterWerewolfBase = require("../set5ED/GreaterWerewolf");

class GreaterWerewolf extends GreaterWerewolfBase {
  constructor(game) {
    super(game, "Greater Werewolf", "Homelands", "HML");
  }
}

module.exports = GreaterWerewolf;
