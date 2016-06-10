"use strict";
const Constants = require ("../../../Constants");
const AbolishBase = require("../setDDF/Abolish");

class Abolish extends AbolishBase {
  constructor (game) {
    super(game, "Abolish", "Prophecy", "PCY");
  }
}

module.exports = Abolish;
