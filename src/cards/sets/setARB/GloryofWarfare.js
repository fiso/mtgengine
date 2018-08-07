"use strict";
const Constants = require ("../../../Constants");
const GloryofWarfareBase = require("../setHOP/GloryofWarfare");

class GloryofWarfare extends GloryofWarfareBase {
  constructor (game) {
    super(game, "Glory of Warfare", "Alara Reborn", "ARB");
  }
}

module.exports = GloryofWarfare;
