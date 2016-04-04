"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgTombofYawgmothBase = require("../setV12/UrborgTombofYawgmoth.js");

class UrborgTombofYawgmoth extends UrborgTombofYawgmothBase {
  constructor(game) {
    super(game, "Urborg, Tomb of Yawgmoth", "Magic 2015 Core Set", "M15");
  }
}

module.exports = UrborgTombofYawgmoth;
