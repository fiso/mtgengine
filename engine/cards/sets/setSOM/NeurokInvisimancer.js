"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NeurokInvisimancerBase = require("../setDDI/NeurokInvisimancer.js");

class NeurokInvisimancer extends NeurokInvisimancerBase {
  constructor(game) {
    super(game, "Neurok Invisimancer", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NeurokInvisimancer;
