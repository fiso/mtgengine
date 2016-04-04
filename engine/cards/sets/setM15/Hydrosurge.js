"use strict";
const Constants = require ("../../../Constants");
const HydrosurgeBase = require("../setM13/Hydrosurge");

class Hydrosurge extends HydrosurgeBase {
  constructor(game) {
    super(game, "Hydrosurge", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Hydrosurge;
