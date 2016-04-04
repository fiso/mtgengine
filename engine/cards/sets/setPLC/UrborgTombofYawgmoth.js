"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgTombofYawgmothBase = require("../setV12/UrborgTombofYawgmoth.js");

class UrborgTombofYawgmoth extends UrborgTombofYawgmothBase {
  constructor(game) {
    super(game, "Urborg, Tomb of Yawgmoth", "Planar Chaos", "PLC");
  }
}

module.exports = UrborgTombofYawgmoth;
