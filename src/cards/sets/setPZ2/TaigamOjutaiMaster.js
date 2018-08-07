"use strict";
const Constants = require ("../../../Constants");
const TaigamOjutaiMasterBase = require("../setC17/TaigamOjutaiMaster");

class TaigamOjutaiMaster extends TaigamOjutaiMasterBase {
  constructor (game) {
    super(game, "Taigam, Ojutai Master", "You Make the Cube", "PZ2");
  }
}

module.exports = TaigamOjutaiMaster;
