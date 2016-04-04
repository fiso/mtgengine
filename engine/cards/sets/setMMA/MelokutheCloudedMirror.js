"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MelokutheCloudedMirrorBase = require("../setCHK/MelokutheCloudedMirror.js");

class MelokutheCloudedMirror extends MelokutheCloudedMirrorBase {
  constructor(game) {
    super(game, "Meloku the Clouded Mirror", "Modern Masters", "MMA");
  }
}

module.exports = MelokutheCloudedMirror;
