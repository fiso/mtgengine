"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const InitiatesoftheEbonHandBase = require("../setFEM/InitiatesoftheEbonHand.js");

class InitiatesoftheEbonHand extends InitiatesoftheEbonHandBase {
  constructor(game) {
    super(game, "Initiates of the Ebon Hand", "Fifth Edition", "5ED");
  }
}

module.exports = InitiatesoftheEbonHand;
