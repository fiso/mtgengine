"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OloroAgelessAsceticBase = require("../setC13/OloroAgelessAscetic.js");

class OloroAgelessAscetic extends OloroAgelessAsceticBase {
  constructor(game) {
    super(game, "Oloro, Ageless Ascetic", "Judge Gift Program", "pJGP");
  }
}

module.exports = OloroAgelessAscetic;
