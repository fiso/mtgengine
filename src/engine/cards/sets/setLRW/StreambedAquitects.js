"use strict";
const Constants = require ("../../../Constants");
const StreambedAquitectsBase = require("../setDDT/StreambedAquitects");

class StreambedAquitects extends StreambedAquitectsBase {
  constructor (game) {
    super(game, "Streambed Aquitects", "Lorwyn", "LRW");
  }
}

module.exports = StreambedAquitects;
