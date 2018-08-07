"use strict";
const Constants = require ("../../../Constants");
const ResoundingThunderBase = require("../setTD0/ResoundingThunder");

class ResoundingThunder extends ResoundingThunderBase {
  constructor (game) {
    super(game, "Resounding Thunder", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingThunder;
