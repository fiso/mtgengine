"use strict";
const Constants = require ("../../../Constants");
const ArashinSovereignBase = require("../setDTK/ArashinSovereign");

class ArashinSovereign extends ArashinSovereignBase {
  constructor (game) {
    super(game, "Arashin Sovereign", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = ArashinSovereign;
