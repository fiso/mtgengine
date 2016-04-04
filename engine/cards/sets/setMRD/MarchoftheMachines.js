"use strict";
const Constants = require ("../../../Constants");
const MarchoftheMachinesBase = require("../setARC/MarchoftheMachines");

class MarchoftheMachines extends MarchoftheMachinesBase {
  constructor(game) {
    super(game, "March of the Machines", "Mirrodin", "MRD");
  }
}

module.exports = MarchoftheMachines;
