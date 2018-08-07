"use strict";
const Constants = require ("../../../Constants");
const BurnoutBase = require("../setME2/Burnout");

class Burnout extends BurnoutBase {
  constructor (game) {
    super(game, "Burnout", "Alliances", "ALL");
  }
}

module.exports = Burnout;
