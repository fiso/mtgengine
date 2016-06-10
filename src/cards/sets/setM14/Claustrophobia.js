"use strict";
const Constants = require ("../../../Constants");
const ClaustrophobiaBase = require("../setDDM/Claustrophobia");

class Claustrophobia extends ClaustrophobiaBase {
  constructor (game) {
    super(game, "Claustrophobia", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Claustrophobia;
