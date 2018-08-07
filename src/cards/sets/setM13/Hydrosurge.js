"use strict";
const Constants = require ("../../../Constants");
const HydrosurgeBase = require("../setM15/Hydrosurge");

class Hydrosurge extends HydrosurgeBase {
  constructor (game) {
    super(game, "Hydrosurge", "Magic 2013", "M13");
  }
}

module.exports = Hydrosurge;
