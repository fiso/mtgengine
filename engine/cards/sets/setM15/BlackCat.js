"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackCatBase = require("../setDKA/BlackCat.js");

class BlackCat extends BlackCatBase {
  constructor(game) {
    super(game, "Black Cat", "Magic 2015 Core Set", "M15");
  }
}

module.exports = BlackCat;
