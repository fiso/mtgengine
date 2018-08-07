"use strict";
const Constants = require ("../../../Constants");
const GraspofPhantomsBase = require("../setMM3/GraspofPhantoms");

class GraspofPhantoms extends GraspofPhantomsBase {
  constructor (game) {
    super(game, "Grasp of Phantoms", "Innistrad", "ISD");
  }
}

module.exports = GraspofPhantoms;
