"use strict";
const Constants = require ("../../../Constants");
const SetonsScoutBase = require("../setWC02/SetonsScout");

class SetonsScout extends SetonsScoutBase {
  constructor (game) {
    super(game, "Seton's Scout", "Torment", "TOR");
  }
}

module.exports = SetonsScout;
