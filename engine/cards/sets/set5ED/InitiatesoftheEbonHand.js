"use strict";
const Constants = require ("../../../Constants");
const InitiatesoftheEbonHandBase = require("../setFEM/InitiatesoftheEbonHand");

class InitiatesoftheEbonHand extends InitiatesoftheEbonHandBase {
  constructor(game) {
    super(game, "Initiates of the Ebon Hand", "Fifth Edition", "5ED");
  }
}

module.exports = InitiatesoftheEbonHand;
