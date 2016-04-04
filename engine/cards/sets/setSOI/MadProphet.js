"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MadProphetBase = require("../setAVR/MadProphet.js");

class MadProphet extends MadProphetBase {
  constructor(game) {
    super(game, "Mad Prophet", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MadProphet;
