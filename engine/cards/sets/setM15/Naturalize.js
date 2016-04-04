"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalizeBase = require("../setDTK/Naturalize.js");

class Naturalize extends NaturalizeBase {
  constructor(game) {
    super(game, "Naturalize", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Naturalize;
