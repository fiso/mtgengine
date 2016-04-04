"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuressBase = require("../setpARL/Duress.js");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Magic 2010", "M10");
  }
}

module.exports = Duress;
