"use strict";
const Constants = require ("../../../Constants");
const SorinsThirstBase = require("../setDDK/SorinsThirst");

class SorinsThirst extends SorinsThirstBase {
  constructor(game) {
    super(game, "Sorin's Thirst", "Magic 2012", "M12");
  }
}

module.exports = SorinsThirst;
