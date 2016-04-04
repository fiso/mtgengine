"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClaustrophobiaBase = require("../setDDM/Claustrophobia.js");

class Claustrophobia extends ClaustrophobiaBase {
  constructor(game) {
    super(game, "Claustrophobia", "Innistrad", "ISD");
  }
}

module.exports = Claustrophobia;
