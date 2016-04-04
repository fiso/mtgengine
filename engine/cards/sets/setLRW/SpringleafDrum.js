"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpringleafDrumBase = require("../setBNG/SpringleafDrum.js");

class SpringleafDrum extends SpringleafDrumBase {
  constructor(game) {
    super(game, "Springleaf Drum", "Lorwyn", "LRW");
  }
}

module.exports = SpringleafDrum;
