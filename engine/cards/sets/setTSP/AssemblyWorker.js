"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AssemblyWorkerBase = require("../setDDF/AssemblyWorker.js");

class AssemblyWorker extends AssemblyWorkerBase {
  constructor(game) {
    super(game, "Assembly-Worker", "Time Spiral", "TSP");
  }
}

module.exports = AssemblyWorker;
