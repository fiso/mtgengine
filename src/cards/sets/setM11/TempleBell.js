"use strict";
const Constants = require ("../../../Constants");
const TempleBellBase = require("../setC13/TempleBell");

class TempleBell extends TempleBellBase {
  constructor (game) {
    super(game, "Temple Bell", "Magic 2011", "M11");
  }
}

module.exports = TempleBell;
