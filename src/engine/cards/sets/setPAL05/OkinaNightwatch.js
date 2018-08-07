"use strict";
const Constants = require ("../../../Constants");
const OkinaNightwatchBase = require("../setSOK/OkinaNightwatch");

class OkinaNightwatch extends OkinaNightwatchBase {
  constructor (game) {
    super(game, "Okina Nightwatch", "Arena League 2005", "PAL05");
  }
}

module.exports = OkinaNightwatch;
