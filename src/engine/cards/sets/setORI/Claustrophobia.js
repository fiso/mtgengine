"use strict";
const Constants = require ("../../../Constants");
const ClaustrophobiaBase = require("../setBBD/Claustrophobia");

class Claustrophobia extends ClaustrophobiaBase {
  constructor (game) {
    super(game, "Claustrophobia", "Magic Origins", "ORI");
  }
}

module.exports = Claustrophobia;
