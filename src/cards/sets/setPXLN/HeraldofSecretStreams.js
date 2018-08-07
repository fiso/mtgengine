"use strict";
const Constants = require ("../../../Constants");
const HeraldofSecretStreamsBase = require("../setXLN/HeraldofSecretStreams");

class HeraldofSecretStreams extends HeraldofSecretStreamsBase {
  constructor (game) {
    super(game, "Herald of Secret Streams", "Ixalan Promos", "PXLN");
  }
}

module.exports = HeraldofSecretStreams;
