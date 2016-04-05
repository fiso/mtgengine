"use strict";
const Constants = require ("../../../Constants");
const GlorySeekerBase = require("../setDDF/GlorySeeker");

class GlorySeeker extends GlorySeekerBase {
  constructor(game) {
    super(game, "Glory Seeker", "Onslaught", "ONS");
  }
}

module.exports = GlorySeeker;
