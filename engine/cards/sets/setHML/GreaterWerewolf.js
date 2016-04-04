"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterWerewolfBase = require("../set5ED/GreaterWerewolf.js");

class GreaterWerewolf extends GreaterWerewolfBase {
  constructor(game) {
    super(game, "Greater Werewolf", "Homelands", "HML");
  }
}

module.exports = GreaterWerewolf;
