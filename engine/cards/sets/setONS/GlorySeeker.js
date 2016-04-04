"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GlorySeekerBase = require("../setDDF/GlorySeeker.js");

class GlorySeeker extends GlorySeekerBase {
  constructor(game) {
    super(game, "Glory Seeker", "Onslaught", "ONS");
  }
}

module.exports = GlorySeeker;
