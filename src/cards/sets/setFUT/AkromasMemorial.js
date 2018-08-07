"use strict";
const Constants = require ("../../../Constants");
const AkromasMemorialBase = require("../setM13/AkromasMemorial");

class AkromasMemorial extends AkromasMemorialBase {
  constructor (game) {
    super(game, "Akroma's Memorial", "Future Sight", "FUT");
  }
}

module.exports = AkromasMemorial;
