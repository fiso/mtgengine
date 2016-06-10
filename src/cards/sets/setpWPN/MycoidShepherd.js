"use strict";
const Constants = require ("../../../Constants");
const MycoidShepherdBase = require("../setARB/MycoidShepherd");

class MycoidShepherd extends MycoidShepherdBase {
  constructor (game) {
    super(game, "Mycoid Shepherd", "WPN and Gateway", "pWPN");
  }
}

module.exports = MycoidShepherd;
