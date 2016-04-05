"use strict";
const Constants = require ("../../../Constants");
const VolrathsLaboratoryBase = require("../setSTH/VolrathsLaboratory");

class VolrathsLaboratory extends VolrathsLaboratoryBase {
  constructor(game) {
    super(game, "Volrath's Laboratory", "Tempest Remastered", "TPR");
  }
}

module.exports = VolrathsLaboratory;
