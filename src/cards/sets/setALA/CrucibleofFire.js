"use strict";
const Constants = require ("../../../Constants");
const CrucibleofFireBase = require("../setIMA/CrucibleofFire");

class CrucibleofFire extends CrucibleofFireBase {
  constructor (game) {
    super(game, "Crucible of Fire", "Shards of Alara", "ALA");
  }
}

module.exports = CrucibleofFire;
