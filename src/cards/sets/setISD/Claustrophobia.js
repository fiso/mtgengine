"use strict";
const Constants = require ("../../../Constants");
const ClaustrophobiaBase = require("../setDDM/Claustrophobia");

class Claustrophobia extends ClaustrophobiaBase {
  constructor (game) {
    super(game, "Claustrophobia", "Innistrad", "ISD");
  }
}

module.exports = Claustrophobia;
