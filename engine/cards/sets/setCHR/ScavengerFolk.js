"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScavengerFolkBase = require("../setATH/ScavengerFolk.js");

class ScavengerFolk extends ScavengerFolkBase {
  constructor(game) {
    super(game, "Scavenger Folk", "Chronicles", "CHR");
  }
}

module.exports = ScavengerFolk;
