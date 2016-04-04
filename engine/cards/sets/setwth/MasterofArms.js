"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MasterofArms extends Card {
  constructor(game) {
    super(game, "Master of Arms", "Weatherlight", "WTH");
  }
}

module.exports = MasterofArms;
