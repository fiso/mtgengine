"use strict";
const Constants = require ("../../../Constants");
const ChaoslaceBase = require("../setCED/Chaoslace");

class Chaoslace extends ChaoslaceBase {
  constructor (game) {
    super(game, "Chaoslace", "Revised Edition", "3ED");
  }
}

module.exports = Chaoslace;
