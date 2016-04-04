"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OkinaNightwatchBase = require("../setpARL/OkinaNightwatch.js");

class OkinaNightwatch extends OkinaNightwatchBase {
  constructor(game) {
    super(game, "Okina Nightwatch", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = OkinaNightwatch;
