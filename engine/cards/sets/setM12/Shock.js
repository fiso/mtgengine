"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Magic 2012", "M12");
  }
}

module.exports = Shock;
