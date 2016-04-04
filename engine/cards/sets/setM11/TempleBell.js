"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleBellBase = require("../setC13/TempleBell.js");

class TempleBell extends TempleBellBase {
  constructor(game) {
    super(game, "Temple Bell", "Magic 2011", "M11");
  }
}

module.exports = TempleBell;
