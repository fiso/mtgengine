"use strict";
const Constants = require ("../../../Constants");
const UrborgTombofYawgmothBase = require("../setV12/UrborgTombofYawgmoth");

class UrborgTombofYawgmoth extends UrborgTombofYawgmothBase {
  constructor (game) {
    super(game, "Urborg, Tomb of Yawgmoth", "Planar Chaos", "PLC");
  }
}

module.exports = UrborgTombofYawgmoth;
