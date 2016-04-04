"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MayaeltheAnimaBase = require("../setC13/MayaeltheAnima.js");

class MayaeltheAnima extends MayaeltheAnimaBase {
  constructor(game) {
    super(game, "Mayael the Anima", "Shards of Alara", "ALA");
  }
}

module.exports = MayaeltheAnima;
