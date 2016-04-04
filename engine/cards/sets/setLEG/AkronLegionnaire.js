"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AkronLegionnaireBase = require("../setCHR/AkronLegionnaire.js");

class AkronLegionnaire extends AkronLegionnaireBase {
  constructor(game) {
    super(game, "Akron Legionnaire", "Legends", "LEG");
  }
}

module.exports = AkronLegionnaire;
