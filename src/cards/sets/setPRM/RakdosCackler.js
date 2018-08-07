"use strict";
const Constants = require ("../../../Constants");
const RakdosCacklerBase = require("../setF13/RakdosCackler");

class RakdosCackler extends RakdosCacklerBase {
  constructor (game) {
    super(game, "Rakdos Cackler", "Magic Online Promos", "PRM");
  }
}

module.exports = RakdosCackler;
