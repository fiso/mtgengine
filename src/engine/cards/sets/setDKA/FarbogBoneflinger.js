"use strict";
const Constants = require ("../../../Constants");
const FarbogBoneflingerBase = require("../setCN2/FarbogBoneflinger");

class FarbogBoneflinger extends FarbogBoneflingerBase {
  constructor (game) {
    super(game, "Farbog Boneflinger", "Dark Ascension", "DKA");
  }
}

module.exports = FarbogBoneflinger;
