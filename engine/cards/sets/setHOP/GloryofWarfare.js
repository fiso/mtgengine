"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GloryofWarfareBase = require("../setARB/GloryofWarfare.js");

class GloryofWarfare extends GloryofWarfareBase {
  constructor(game) {
    super(game, "Glory of Warfare", "Planechase", "HOP");
  }
}

module.exports = GloryofWarfare;
