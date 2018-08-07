"use strict";
const Constants = require ("../../../Constants");
const GlorySeekerBase = require("../setW17/GlorySeeker");

class GlorySeeker extends GlorySeekerBase {
  constructor (game) {
    super(game, "Glory Seeker", "Eighth Edition", "8ED");
  }
}

module.exports = GlorySeeker;
