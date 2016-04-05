"use strict";
const Constants = require ("../../../Constants");
const MarchoftheMachinesBase = require("../setARC/MarchoftheMachines");

class MarchoftheMachines extends MarchoftheMachinesBase {
  constructor(game) {
    super(game, "March of the Machines", "Tenth Edition", "10E");
  }
}

module.exports = MarchoftheMachines;
