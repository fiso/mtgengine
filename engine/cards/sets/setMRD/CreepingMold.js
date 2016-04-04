"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CreepingMoldBase = require("../setpARL/CreepingMold.js");

class CreepingMold extends CreepingMoldBase {
  constructor(game) {
    super(game, "Creeping Mold", "Mirrodin", "MRD");
  }
}

module.exports = CreepingMold;
