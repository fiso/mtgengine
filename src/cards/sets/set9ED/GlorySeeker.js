"use strict";
const Constants = require ("../../../Constants");
const GlorySeekerBase = require("../setDDF/GlorySeeker");

class GlorySeeker extends GlorySeekerBase {
  constructor (game) {
    super(game, "Glory Seeker", "Ninth Edition", "9ED");
  }
}

module.exports = GlorySeeker;
