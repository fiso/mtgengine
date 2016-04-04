"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuressBase = require("../setpARL/Duress.js");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Duress;
