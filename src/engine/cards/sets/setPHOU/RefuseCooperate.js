"use strict";
const Constants = require ("../../../Constants");
const RefuseCooperateBase = require("../setHOU/RefuseCooperate");

class RefuseCooperate extends RefuseCooperateBase {
  constructor (game) {
    super(game, "Refuse // Cooperate", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = RefuseCooperate;
