"use strict";
const Constants = require ("../../../Constants");
const OdricLunarchMarshalBase = require("../setSOI/OdricLunarchMarshal");

class OdricLunarchMarshal extends OdricLunarchMarshalBase {
  constructor (game) {
    super(game, "Odric, Lunarch Marshal", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = OdricLunarchMarshal;
