"use strict";
const Constants = require ("../../../Constants");
const TempleBellBase = require("../setC16/TempleBell");

class TempleBell extends TempleBellBase {
  constructor (game) {
    super(game, "Temple Bell", "Commander 2013", "C13");
  }
}

module.exports = TempleBell;
