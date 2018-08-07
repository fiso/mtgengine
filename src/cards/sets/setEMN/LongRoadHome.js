"use strict";
const Constants = require ("../../../Constants");
const LongRoadHomeBase = require("../setBBD/LongRoadHome");

class LongRoadHome extends LongRoadHomeBase {
  constructor (game) {
    super(game, "Long Road Home", "Eldritch Moon", "EMN");
  }
}

module.exports = LongRoadHome;
