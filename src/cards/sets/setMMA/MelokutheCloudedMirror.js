"use strict";
const Constants = require ("../../../Constants");
const MelokutheCloudedMirrorBase = require("../setCHK/MelokutheCloudedMirror");

class MelokutheCloudedMirror extends MelokutheCloudedMirrorBase {
  constructor (game) {
    super(game, "Meloku the Clouded Mirror", "Modern Masters", "MMA");
  }
}

module.exports = MelokutheCloudedMirror;
