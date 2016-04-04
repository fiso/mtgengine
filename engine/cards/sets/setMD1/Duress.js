"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor(game) {
    super(game, "Duress", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = Duress;
