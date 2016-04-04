"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OppressiveRaysBase = require("../setJOU/OppressiveRays.js");

class OppressiveRays extends OppressiveRaysBase {
  constructor(game) {
    super(game, "Oppressive Rays", "Magic 2015 Core Set", "M15");
  }
}

module.exports = OppressiveRays;
