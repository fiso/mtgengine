"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarriorsStandBase = require("../setPO2/WarriorsStand.js");

class WarriorsStand extends WarriorsStandBase {
  constructor(game) {
    super(game, "Warrior's Stand", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WarriorsStand;
