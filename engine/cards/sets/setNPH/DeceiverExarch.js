"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeceiverExarchBase = require("../setC13/DeceiverExarch.js");

class DeceiverExarch extends DeceiverExarchBase {
  constructor(game) {
    super(game, "Deceiver Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = DeceiverExarch;
