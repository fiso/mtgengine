"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Shock;
