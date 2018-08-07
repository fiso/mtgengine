"use strict";
const Constants = require ("../../../Constants");
const DemonofCatastrophesBase = require("../setM19/DemonofCatastrophes");

class DemonofCatastrophes extends DemonofCatastrophesBase {
  constructor (game) {
    super(game, "Demon of Catastrophes", "Magic Online Promos", "PRM");
  }
}

module.exports = DemonofCatastrophes;
