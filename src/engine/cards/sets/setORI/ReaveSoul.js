"use strict";
const Constants = require ("../../../Constants");
const ReaveSoulBase = require("../setIMA/ReaveSoul");

class ReaveSoul extends ReaveSoulBase {
  constructor (game) {
    super(game, "Reave Soul", "Magic Origins", "ORI");
  }
}

module.exports = ReaveSoul;
