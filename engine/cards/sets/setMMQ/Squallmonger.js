"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquallmongerBase = require("../setCMD/Squallmonger.js");

class Squallmonger extends SquallmongerBase {
  constructor(game) {
    super(game, "Squallmonger", "Mercadian Masques", "MMQ");
  }
}

module.exports = Squallmonger;
