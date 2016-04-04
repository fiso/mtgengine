"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PortentBase = require("../setCST/Portent.js");

class Portent extends PortentBase {
  constructor(game) {
    super(game, "Portent", "Fifth Edition", "5ED");
  }
}

module.exports = Portent;
