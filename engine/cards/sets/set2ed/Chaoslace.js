"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaoslaceBase = require("../setCED/Chaoslace.js");

class Chaoslace extends ChaoslaceBase {
  constructor(game) {
    super(game, "Chaoslace", "Unlimited Edition", "2ED");
  }
}

module.exports = Chaoslace;
