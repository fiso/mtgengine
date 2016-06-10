"use strict";
const Constants = require ("../../../Constants");
const MadProphetBase = require("../setAVR/MadProphet");

class MadProphet extends MadProphetBase {
  constructor (game) {
    super(game, "Mad Prophet", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MadProphet;
