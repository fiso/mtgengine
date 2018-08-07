"use strict";
const Constants = require ("../../../Constants");
const DeepglowSkateBase = require("../setCM2/DeepglowSkate");

class DeepglowSkate extends DeepglowSkateBase {
  constructor (game) {
    super(game, "Deepglow Skate", "Commander 2016", "C16");
  }
}

module.exports = DeepglowSkate;
