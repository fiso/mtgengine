"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MidnightHauntingBase = require("../setC14/MidnightHaunting.js");

class MidnightHaunting extends MidnightHauntingBase {
  constructor(game) {
    super(game, "Midnight Haunting", "Innistrad", "ISD");
  }
}

module.exports = MidnightHaunting;
