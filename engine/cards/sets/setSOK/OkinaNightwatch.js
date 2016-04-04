"use strict";
const Constants = require ("../../../Constants");
const OkinaNightwatchBase = require("../setpARL/OkinaNightwatch");

class OkinaNightwatch extends OkinaNightwatchBase {
  constructor(game) {
    super(game, "Okina Nightwatch", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OkinaNightwatch;
