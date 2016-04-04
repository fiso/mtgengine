"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RavenousRatsBase = require("../setDD3_GVL/RavenousRats.js");

class RavenousRats extends RavenousRatsBase {
  constructor(game) {
    super(game, "Ravenous Rats", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RavenousRats;
