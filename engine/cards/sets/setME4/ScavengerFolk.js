"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScavengerFolkBase = require("../setATH/ScavengerFolk.js");

class ScavengerFolk extends ScavengerFolkBase {
  constructor(game) {
    super(game, "Scavenger Folk", "Masters Edition IV", "ME4");
  }
}

module.exports = ScavengerFolk;
