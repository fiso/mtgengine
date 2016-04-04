"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorinsThirstBase = require("../setDDK/SorinsThirst.js");

class SorinsThirst extends SorinsThirstBase {
  constructor(game) {
    super(game, "Sorin's Thirst", "Magic 2012", "M12");
  }
}

module.exports = SorinsThirst;
