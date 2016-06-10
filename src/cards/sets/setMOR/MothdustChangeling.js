"use strict";
const Constants = require ("../../../Constants");
const MothdustChangelingBase = require("../setMMA/MothdustChangeling");

class MothdustChangeling extends MothdustChangelingBase {
  constructor (game) {
    super(game, "Mothdust Changeling", "Morningtide", "MOR");
  }
}

module.exports = MothdustChangeling;
