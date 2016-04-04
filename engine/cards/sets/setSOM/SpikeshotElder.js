"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpikeshotElderBase = require("../setMM2/SpikeshotElder.js");

class SpikeshotElder extends SpikeshotElderBase {
  constructor(game) {
    super(game, "Spikeshot Elder", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SpikeshotElder;
