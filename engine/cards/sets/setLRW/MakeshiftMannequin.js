"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MakeshiftMannequinBase = require("../setARC/MakeshiftMannequin.js");

class MakeshiftMannequin extends MakeshiftMannequinBase {
  constructor(game) {
    super(game, "Makeshift Mannequin", "Lorwyn", "LRW");
  }
}

module.exports = MakeshiftMannequin;
