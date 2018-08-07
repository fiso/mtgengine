"use strict";
const Constants = require ("../../../Constants");
const DeepglowSkateBase = require("../setCM2/DeepglowSkate");

class DeepglowSkate extends DeepglowSkateBase {
  constructor (game) {
    super(game, "Deepglow Skate", "You Make the Cube", "PZ2");
  }
}

module.exports = DeepglowSkate;
