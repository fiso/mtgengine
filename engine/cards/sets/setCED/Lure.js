"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LureBase = require("../setCHK/Lure.js");

class Lure extends LureBase {
  constructor(game) {
    super(game, "Lure", "Collector's Edition", "CED");
  }
}

module.exports = Lure;
