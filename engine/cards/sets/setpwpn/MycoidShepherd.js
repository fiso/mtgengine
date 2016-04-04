"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MycoidShepherdBase = require("../setARB/MycoidShepherd.js");

class MycoidShepherd extends MycoidShepherdBase {
  constructor(game) {
    super(game, "Mycoid Shepherd", "WPN and Gateway", "pWPN");
  }
}

module.exports = MycoidShepherd;
