"use strict";
const Constants = require ("../../../Constants");
const PaleRecluseBase = require("../setARC/PaleRecluse");

class PaleRecluse extends PaleRecluseBase {
  constructor (game) {
    super(game, "Pale Recluse", "Alara Reborn", "ARB");
  }
}

module.exports = PaleRecluse;
