"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RootwaterCommandoBase = require("../setNMS/RootwaterCommando.js");

class RootwaterCommando extends RootwaterCommandoBase {
  constructor(game) {
    super(game, "Rootwater Commando", "Tenth Edition", "10E");
  }
}

module.exports = RootwaterCommando;
