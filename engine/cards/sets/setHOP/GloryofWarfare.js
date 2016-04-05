"use strict";
const Constants = require ("../../../Constants");
const GloryofWarfareBase = require("../setARB/GloryofWarfare");

class GloryofWarfare extends GloryofWarfareBase {
  constructor(game) {
    super(game, "Glory of Warfare", "Planechase", "HOP");
  }
}

module.exports = GloryofWarfare;
