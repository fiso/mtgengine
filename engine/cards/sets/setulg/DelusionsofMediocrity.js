"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DelusionsofMediocrityBase = require("../set7ED/DelusionsofMediocrity.js");

class DelusionsofMediocrity extends DelusionsofMediocrityBase {
  constructor(game) {
    super(game, "Delusions of Mediocrity", "Urza's Legacy", "ULG");
  }
}

module.exports = DelusionsofMediocrity;
