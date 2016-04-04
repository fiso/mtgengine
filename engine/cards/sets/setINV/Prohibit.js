"use strict";
const Constants = require ("../../../Constants");
const ProhibitBase = require("../setDDM/Prohibit");

class Prohibit extends ProhibitBase {
  constructor(game) {
    super(game, "Prohibit", "Invasion", "INV");
  }
}

module.exports = Prohibit;
