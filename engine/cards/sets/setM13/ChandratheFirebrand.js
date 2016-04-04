"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChandratheFirebrandBase = require("../setM12/ChandratheFirebrand.js");

class ChandratheFirebrand extends ChandratheFirebrandBase {
  constructor(game) {
    super(game, "Chandra, the Firebrand", "Magic 2013", "M13");
  }
}

module.exports = ChandratheFirebrand;
