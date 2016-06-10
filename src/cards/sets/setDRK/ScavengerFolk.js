"use strict";
const Constants = require ("../../../Constants");
const ScavengerFolkBase = require("../setATH/ScavengerFolk");

class ScavengerFolk extends ScavengerFolkBase {
  constructor (game) {
    super(game, "Scavenger Folk", "The Dark", "DRK");
  }
}

module.exports = ScavengerFolk;
