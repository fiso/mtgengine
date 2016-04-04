"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MothdustChangelingBase = require("../setMMA/MothdustChangeling.js");

class MothdustChangeling extends MothdustChangelingBase {
  constructor(game) {
    super(game, "Mothdust Changeling", "Morningtide", "MOR");
  }
}

module.exports = MothdustChangeling;
