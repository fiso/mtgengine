"use strict";
const Constants = require ("../../../Constants");
const StreamofAcidBase = require("../setPZ2/StreamofAcid");

class StreamofAcid extends StreamofAcidBase {
  constructor (game) {
    super(game, "Stream of Acid", "Starter 1999", "S99");
  }
}

module.exports = StreamofAcid;
