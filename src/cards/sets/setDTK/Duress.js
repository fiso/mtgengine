"use strict";
const Constants = require ("../../../Constants");
const DuressBase = require("../setpARL/Duress");

class Duress extends DuressBase {
  constructor (game) {
    super(game, "Duress", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Duress;
