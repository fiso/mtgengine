"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesmericTranceBase = require("../setICE/MesmericTrance.js");

class MesmericTrance extends MesmericTranceBase {
  constructor(game) {
    super(game, "Mesmeric Trance", "Masters Edition II", "ME2");
  }
}

module.exports = MesmericTrance;
