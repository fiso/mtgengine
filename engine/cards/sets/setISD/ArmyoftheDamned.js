"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmyoftheDamnedBase = require("../setC13/ArmyoftheDamned.js");

class ArmyoftheDamned extends ArmyoftheDamnedBase {
  constructor(game) {
    super(game, "Army of the Damned", "Innistrad", "ISD");
  }
}

module.exports = ArmyoftheDamned;
