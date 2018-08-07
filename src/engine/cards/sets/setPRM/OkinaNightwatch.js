"use strict";
const Constants = require ("../../../Constants");
const OkinaNightwatchBase = require("../setSOK/OkinaNightwatch");

class OkinaNightwatch extends OkinaNightwatchBase {
  constructor (game) {
    super(game, "Okina Nightwatch", "Magic Online Promos", "PRM");
  }
}

module.exports = OkinaNightwatch;
