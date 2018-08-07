"use strict";
const Constants = require ("../../../Constants");
const SylvanAdvocateBase = require("../setDDU/SylvanAdvocate");

class SylvanAdvocate extends SylvanAdvocateBase {
  constructor (game) {
    super(game, "Sylvan Advocate", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SylvanAdvocate;
