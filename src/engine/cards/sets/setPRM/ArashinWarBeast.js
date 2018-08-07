"use strict";
const Constants = require ("../../../Constants");
const ArashinWarBeastBase = require("../setFRF/ArashinWarBeast");

class ArashinWarBeast extends ArashinWarBeastBase {
  constructor (game) {
    super(game, "Arashin War Beast", "Magic Online Promos", "PRM");
  }
}

module.exports = ArashinWarBeast;
