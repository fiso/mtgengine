"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrimTutorBase = require("../setME3/GrimTutor.js");

class GrimTutor extends GrimTutorBase {
  constructor(game) {
    super(game, "Grim Tutor", "Starter 1999", "S99");
  }
}

module.exports = GrimTutor;
