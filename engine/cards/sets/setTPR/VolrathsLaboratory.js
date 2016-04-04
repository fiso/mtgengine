"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolrathsLaboratoryBase = require("../setSTH/VolrathsLaboratory.js");

class VolrathsLaboratory extends VolrathsLaboratoryBase {
  constructor(game) {
    super(game, "Volrath's Laboratory", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsLaboratory;
