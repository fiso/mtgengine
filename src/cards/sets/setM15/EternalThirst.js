"use strict";
const Constants = require ("../../../Constants");
const EternalThirstBase = require("../setIMA/EternalThirst");

class EternalThirst extends EternalThirstBase {
  constructor (game) {
    super(game, "Eternal Thirst", "Magic 2015", "M15");
  }
}

module.exports = EternalThirst;
