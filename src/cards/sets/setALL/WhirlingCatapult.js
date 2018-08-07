"use strict";
const Constants = require ("../../../Constants");
const WhirlingCatapultBase = require("../setME2/WhirlingCatapult");

class WhirlingCatapult extends WhirlingCatapultBase {
  constructor (game) {
    super(game, "Whirling Catapult", "Alliances", "ALL");
  }
}

module.exports = WhirlingCatapult;
