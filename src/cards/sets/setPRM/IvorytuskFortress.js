"use strict";
const Constants = require ("../../../Constants");
const IvorytuskFortressBase = require("../setKTK/IvorytuskFortress");

class IvorytuskFortress extends IvorytuskFortressBase {
  constructor (game) {
    super(game, "Ivorytusk Fortress", "Magic Online Promos", "PRM");
  }
}

module.exports = IvorytuskFortress;
