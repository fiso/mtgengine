"use strict";
const Constants = require ("../../../Constants");
const DamnationBase = require("../setMP2/Damnation");

class Damnation extends DamnationBase {
  constructor (game) {
    super(game, "Damnation", "Magic Online Promos", "PRM");
  }
}

module.exports = Damnation;
