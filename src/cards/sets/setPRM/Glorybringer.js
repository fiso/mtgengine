"use strict";
const Constants = require ("../../../Constants");
const GlorybringerBase = require("../setAKH/Glorybringer");

class Glorybringer extends GlorybringerBase {
  constructor (game) {
    super(game, "Glorybringer", "Magic Online Promos", "PRM");
  }
}

module.exports = Glorybringer;
