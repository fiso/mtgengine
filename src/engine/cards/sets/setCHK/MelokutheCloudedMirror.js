"use strict";
const Constants = require ("../../../Constants");
const MelokutheCloudedMirrorBase = require("../setMMA/MelokutheCloudedMirror");

class MelokutheCloudedMirror extends MelokutheCloudedMirrorBase {
  constructor (game) {
    super(game, "Meloku the Clouded Mirror", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MelokutheCloudedMirror;
