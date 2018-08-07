"use strict";
const Constants = require ("../../../Constants");
const SpringleafDrumBase = require("../setBNG/SpringleafDrum");

class SpringleafDrum extends SpringleafDrumBase {
  constructor (game) {
    super(game, "Springleaf Drum", "Lorwyn", "LRW");
  }
}

module.exports = SpringleafDrum;
