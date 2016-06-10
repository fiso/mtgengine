"use strict";
const Constants = require ("../../../Constants");
const ChaoslaceBase = require("../setCED/Chaoslace");

class Chaoslace extends ChaoslaceBase {
  constructor (game) {
    super(game, "Chaoslace", "Unlimited Edition", "2ED");
  }
}

module.exports = Chaoslace;
