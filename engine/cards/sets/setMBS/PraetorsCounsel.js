"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PraetorsCounselBase = require("../setC14/PraetorsCounsel.js");

class PraetorsCounsel extends PraetorsCounselBase {
  constructor(game) {
    super(game, "Praetor's Counsel", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PraetorsCounsel;
