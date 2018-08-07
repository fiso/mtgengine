"use strict";
const Constants = require ("../../../Constants");
const OloroAgelessAsceticBase = require("../setJ14/OloroAgelessAscetic");

class OloroAgelessAscetic extends OloroAgelessAsceticBase {
  constructor (game) {
    super(game, "Oloro, Ageless Ascetic", "Magic Online Promos", "PRM");
  }
}

module.exports = OloroAgelessAscetic;
