"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MisdirectionBase = require("../setCNS/Misdirection.js");

class Misdirection extends MisdirectionBase {
  constructor(game) {
    super(game, "Misdirection", "Mercadian Masques", "MMQ");
  }
}

module.exports = Misdirection;
