"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HydrosurgeBase = require("../setM13/Hydrosurge.js");

class Hydrosurge extends HydrosurgeBase {
  constructor(game) {
    super(game, "Hydrosurge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Hydrosurge;
