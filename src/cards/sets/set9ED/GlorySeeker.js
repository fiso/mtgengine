"use strict";
const Constants = require ("../../../Constants");
const GlorySeekerBase = require("../setW17/GlorySeeker");

class GlorySeeker extends GlorySeekerBase {
  constructor (game) {
    super(game, "Glory Seeker", "Ninth Edition", "9ED");
  }
}

module.exports = GlorySeeker;
